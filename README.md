# **Mood-Based Yoga Recommender**

## **Overview**
This project leverages AI to recommend yoga routines based on the user's mood. By analyzing mood descriptions using NLP and sentiment analysis, the system identifies the sentiment (positive, negative, neutral) and provides tailored yoga recommendations to enhance the user's well-being.

---

## **Features**
- **Mood Analysis**: Extract sentiment from user input using Hugging Face's transformer models.
- **Personalized Yoga Recommendations**: Suggests yoga routines based on detected sentiment and a curated dataset.
- **Scalable Architecture**: Built with Flask for backend and React for frontend, enabling integration into apps or websites.

---

## **Dataset**
The dataset contains various recommendation of mood descriptions, their corresponding sentiment labels, and yoga recommendations. It covers a wide range of emotions and associated yoga practices for diversity and relevance.

| Mood Text                              | Sentiment Label | Yoga Recommendation                          |
|----------------------------------------|-----------------|-----------------------------------------------|
| I feel great and energized.            | POSITIVE        | Morning Stretch Flow, Sun Salutations        |
| I’m stressed and overwhelmed at work.  | NEGATIVE        | Relaxation Yoga, Deep Breathing Exercise     |
| I feel okay, nothing special today.    | NEUTRAL         | Beginner Yoga Routine, Balance Yoga Sequence |

---

## **Approach**

### **1. Problem Understanding**
The goal is to recommend yoga routines that match the user's emotional state, improving their wellness through personalized suggestions.

### **2. Data Preprocessing**
- Dataset created with diverse mood examples and associated yoga recommendations.
- Preprocessed user mood input using CountVectorizer for cosine similarity matching.

### **3. Model Architecture**
- Hugging Face's pre-trained sentiment analysis model is used for NLP.
- Cosine similarity calculates the closest mood match from the dataset when sentiment alone isn't sufficient.

### **4. Backend**
- Flask API handles sentiment analysis and dataset-based recommendations.
- Handles requests with CORS for frontend compatibility.

### **5. Frontend**
- React-based interface for user-friendly interaction.
- Users can input their mood and view recommended yoga routines dynamically.

---

## **Installation Instructions**
### **Backend Setup**
1. Clone the repository:
   ```bash
   git clone https://github.com/snehaapratap/mood-based-yoga-recommender.git
   ```
2. Navigate to the backend folder:
   ```bash
   cd mood-based-yoga-recommender/backend
   ```
3. Run the Flask app:
   ```bash
   python app.py
   ```

### **Frontend Setup**
1. Navigate to the frontend folder:
   ```bash
   cd frontend/mood-based-yoga-recommender
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the React app:
   ```bash
   npm start
   ```

---

## **How It Works**
1. **Input Mood**: The user inputs a mood description via the frontend.
2. **Sentiment Analysis**: The backend identifies the sentiment (positive, negative, or neutral).
3. **Yoga Recommendation**: 
   - If sentiment matches directly, a predefined recommendation is provided.
   - If no direct match, cosine similarity finds the closest mood from the dataset.
4. **Result Display**: Recommendations are displayed on the frontend.

---

## **Results**
### **Performance**
- **Accuracy**: Sentiment analysis accurately identifies the mood category for diverse inputs.
- **Efficiency**: Recommendations are delivered in real-time with minimal latency.

---

## **Next Steps**
- **Expand Dataset**: Incorporate user feedback to improve and expand the dataset.
- **Advanced Recommendations**: Include multimedia (images/videos) for suggested routines.
- **Deployment**: Host the app on AWS or Heroku for public accessibility.

---

## **Demo Video (Optional)**
A video demonstration showcasing:
- User interaction on the frontend.
- Mood analysis and yoga recommendation in action.

  
[Link to the demo video](https://github.com/user-attachments/assets/7a073a90-7676-42a0-8b06-a1f4f70247b5).

---

## **Contact**
For queries or suggestions:
- **Name**: Sneha P Pratap
- **Email**: sneha.prem918@gmail.com
- **GitHub**: [snehaapratap](https://github.com/snehaapratap)


Contributions are welcome! Feel free to fork the repository and submit pull requests.
