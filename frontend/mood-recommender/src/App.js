import React, { useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  const [mood, setMood] = useState("");
  const [result, setResult] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async () => {
    if (!mood.trim()) {
      alert("Please enter your mood first");
      return;
    }

    setIsLoading(true);
    try {
      const response = await axios.post("http://127.0.0.1:5000/recommend", {
        mood,
      });
      console.log("API Response:", response.data);
      setResult(response.data);
    } catch (error) {
      console.error("Error fetching recommendations:", error);
      alert("Error getting recommendations. Please try again.");
    }
    setIsLoading(false);
  };

  return (
    <div className="app-container">
      <div className="content-wrapper">
        <h1 className="title">Mood-Based Yoga Recommender</h1>
        <div className="input-section">
          <label htmlFor="moodInput" className="form-label">
            How are you feeling today?
          </label>
          <textarea
            id="moodInput"
            className="mood-input"
            rows="3"
            value={mood}
            onChange={(e) => setMood(e.target.value)}
            placeholder="Express your feelings..."
          />
        </div>
        <button
          className="submit-button"
          onClick={handleSubmit}
          disabled={isLoading}
        >
          {isLoading ? "Getting Recommendations..." : "Get Recommendations"}
        </button>

        {result && (
          <div className="results-section">
            <h3 className="mood-title">
              Mood Detected: <span className="mood-value">{result.mood}</span>
            </h3>
            <div className="recommendations-list">
              <h4>Recommended Routines:</h4>
              {Array.isArray(result.recommendations) &&
              result.recommendations.length > 0 ? (
                result.recommendations.map((routine, index) => (
                  <div key={index} className="routine-card">
                    {routine}
                  </div>
                ))
              ) : (
                <p>No recommendations available.</p>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
