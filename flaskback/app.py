from flask import Flask, request, jsonify
from flask_cors import CORS
import requests
from dotenv import load_dotenv
import os
from PIL import Image
import google.generativeai as genai

load_dotenv()

app = Flask(__name__)
CORS(app)

genai.configure(api_key=os.getenv("API_KEY"))

safety_settings = [
    {
        "category": "HARM_CATEGORY_DANGEROUS",
        "threshold": "BLOCK_NONE",
    },
    {
        "category": "HARM_CATEGORY_HARASSMENT",
        "threshold": "BLOCK_NONE",
    },
    {
        "category": "HARM_CATEGORY_HATE_SPEECH",
        "threshold": "BLOCK_NONE",
    },
    {
        "category": "HARM_CATEGORY_SEXUALLY_EXPLICIT",
        "threshold": "BLOCK_NONE",
    },
    {
        "category": "HARM_CATEGORY_DANGEROUS_CONTENT",
        "threshold": "BLOCK_NONE",
    },
]
def get_gemini_response(input, image, prompt):
    model = genai.GenerativeModel('gemini-pro-vision', safety_settings=safety_settings)
    response = model.generate_content([input, image[0], prompt])
    return response.text

def input_image_setup(ipfs_link):
    response = requests.get(ipfs_link)
    if response.status_code == 200:
        bytes_data = response.content
        image_parts = [
            {
                "mime_type": "image/jpeg",
                "data": bytes_data
            }
        ]
        return image_parts
    else:
        raise FileNotFoundError("Failed to fetch image data from IPFS")

@app.route('/')
def home():
    return jsonify({"hello": "world"}), 200

@app.route('/classifyDept/', methods=['POST'])
def generate_content():
    print(request.json)
    # input_prompt = request.json['input']
    # depts = request.json.get('depts', '')
    # image_data = input_image_setup(request.json['pinataIPFS'])
    data = request.json
    input_prompt = data.get('input', 'I would like to register a complaint regarding my recent experience with MCD. I faced issues with the bad food. I hope you can address this matter promptly')
    depts = data.get('depts', ["Customer Service", "Delivery", "Product Quality", "Returns", "Technical Support", "Billing"])
    image = data.get('pinataIPFS', '[{"key":"pinataIPFS","value":"https://ipfs.io/ipfs/QmWcwrMBCYEFUotUogeFVgYj5ACWE9GrLQ3r5a81Pjhu3x","description":"","type":"text","enabled":true}]')
    image_data = input_image_setup("https://ipfs.io/ipfs/" + image)

    # print(image_data)
    predefined_text = (
        f"Assume you are the head of Managing Complaints. Route complaints to the relevant departments of the company. "
        f"Here is the list of departments from which you have to choose one using the description and receipt which Consumer has sent, if no dept is matching properly then select General Department: {depts}. Strictly use English language and return 2 outputs in between them insert a semicolon to differentiate , note reply only the output nothing else. These 2 outputs are required: deptSelected (the complaint through which department is), keywords in 3 words strictly English for future analysis"
    )

    try:
        response = get_gemini_response(input_prompt, image_data, predefined_text)
        print(response)

        # Assuming response is a string separated by semicolons
        parts = [part.strip() for part in response.split(';')]
        # Assuming the first part is deptSelected and the second part is keywords
        dept_selected = parts[0].replace("deptSelected:", "").strip()
        keywords = parts[1].replace("keywords:", "").strip()

        # Assuming the first part is deptSelected and the second part is keywords
        result = {"deptSelected": dept_selected, "keywords": keywords}

        return jsonify({"result": result})

    except Exception as e:
        print(e)
        return jsonify({"error": str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True, port=5000)