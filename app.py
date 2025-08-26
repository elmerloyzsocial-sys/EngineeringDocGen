from flask import Flask, request, jsonify
import openai
import os

app = Flask(__name__)

# Set your OpenAI API key (recommended: use environment variable)
openai.api_key = os.getenv("OPENAI_API_KEY")

@app.route("/api/ai-suggest", methods=["POST"])
def ai_suggest():
    data = request.get_json()
    prompt = data.get("prompt", "")
    section = data.get("section", "")
    if not prompt:
        return jsonify({"suggestion": "No prompt provided."}), 400
    try:
        response = openai.ChatCompletion.create(
            model="gpt-3.5-turbo",
            messages=[
                {"role": "system", "content": "You are a helpful assistant for engineering documentation."},
                {"role": "user", "content": prompt}
            ],
            max_tokens=120
        )
        suggestion = response["choices"][0]["message"]["content"]
        return jsonify({"suggestion": suggestion})
    except Exception as e:
        return jsonify({"suggestion": f"Error: {str(e)}"}), 500

if __name__ == "__main__":
    app.run(debug=True)
