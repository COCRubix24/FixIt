# spacy_app.py

from flask import Flask, request, jsonify
import spacy

app = Flask(__name__)
print("Flask app initialized!")

nlp = spacy.load("en_core_web_sm")


@app.route("/process", methods=["POST"])
def process_text():
    print("Received a request!")
    data = request.get_json()
    user_input = data.get("userInput")

    # Process the user input using spaCy
    doc = nlp(user_input)

    # Extract named entities
    named_entities = [{"text": entity.text, "label": entity.label_}
                      for entity in doc.ents]

    return jsonify({"namedEntities": named_entities})


if __name__ == "__main__":
    app.run(port=5000)
