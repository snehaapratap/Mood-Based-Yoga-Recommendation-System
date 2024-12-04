from flask import Flask, request, jsonify
from flask_cors import CORS
from transformers import pipeline

# Initialize Flask App
app = Flask(__name__)
CORS(app)

# Load Sentiment Analysis Model
sentiment_analyzer = pipeline("sentiment-analysis")

# Mapping mood to yoga routines
yoga_routines = {
    "POSITIVE": ["Morning Stretch Flow", "Sun Salutations"],
    "NEGATIVE": ["Relaxation Yoga", "Deep Breathing Exercise"],
    "NEUTRAL": ["Balance Yoga Sequence", "Beginner Yoga Routine"]
}

@app.route('/recommend', methods=['POST'])
def recommend_yoga():
    data = request.json
    user_mood = data.get('mood', '')

    if not user_mood:
        return jsonify({"error": "Mood text is required"}), 400

    # Analyze sentiment
    sentiment = sentiment_analyzer(user_mood)[0]
    label = sentiment['label']

    # Recommend yoga routines
    recommendations = yoga_routines.get(label.upper(), ["General Yoga Routine"])

    return jsonify({
        "mood": label,
        "recommendations": recommendations
    })

if __name__ == '__main__':
    app.run(debug=True)