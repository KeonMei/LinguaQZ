from flask import Flask, request, jsonify
from flask_cors import CORS
from transformers import AutoTokenizer, AutoModelForSeq2SeqLM

app = Flask(__name__)
CORS(app) 

MODEL_NAME = "deepvk/kazRush-ru-kk"

print("Загружаю модель kazRush...")
tokenizer = AutoTokenizer.from_pretrained(MODEL_NAME)
model = AutoModelForSeq2SeqLM.from_pretrained(MODEL_NAME)
print("Модель загружена")

def translate(text):
    inputs = tokenizer(text, return_tensors="pt", truncation=True)
    outputs = model.generate(
        **inputs,
        max_length=128,
        num_beams=4,
        early_stopping=True
    )
    return tokenizer.decode(outputs[0], skip_special_tokens=True)

@app.route("/translate", methods=["POST"])
def translate_api():
    data = request.get_json()
    text = data.get("text", "")

    if not text:
        return jsonify({"error": "No text provided"}), 400

    result = translate(text)
    return jsonify({"translation": result})

if __name__ == "__main__":
    app.run(host="127.0.0.1", port=5000, debug=True)
