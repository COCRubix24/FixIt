from flask import Flask, request, jsonify
from flask_cors import CORS

from dotenv import load_dotenv
import os
from PIL import Image
import google.generativeai as genai

load_dotenv()

app = Flask(__name__)
CORS(app)

genai.configure(api_key=os.getenv("API_KEY"))

def get_gemini_response(input, image, prompt):
    model = genai.GenerativeModel('gemini-pro-vision')
    response = model.generate_content([input, image[0], prompt])
    return response.text

def input_image_setup(uploaded_file):
    if uploaded_file is not None:
        bytes_data = uploaded_file.read()
        image_parts = [
            {
                "mime_type": uploaded_file.mimetype,
                "data": bytes_data
            }
        ]
        return image_parts
    else:
        raise FileNotFoundError("No file uploaded")

@app.route('/')
def home():
    return jsonify({"hello": "world"}), 200

@app.route('/classifyDept/', methods=['POST'])
def generate_content():
    input_prompt = request.form['input']
    depts = request.form.get('depts', '')

    predefined_text = (
        f"Assume you are the head of Managing Complaints. Route complaints to the relevant departments of the company. "
        f"Here is the list of departments from which you have to choose one using the description and receipt which Consumer has sent, if no dept is matching properly then select General Department: {depts}. Strictly use english language and return json format this attributes : deptSelected (the complaint through for which department is), keywords in 3 words strictly english for future analysis"
    )

    try:
        image_data = input_image_setup(request.files['file'])
        response = get_gemini_response(input_prompt, image_data, predefined_text)
        return jsonify({"generatedContent": response})
    except Exception as e:
        return jsonify({"error": str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True)