import React, { useState } from "react";
import axios from "axios";

export default function App() {
  const [query, setQuery] = useState("");
  const [result, setResult] = useState(null);

  function handleSubmit(e) {
    e.preventDefault();
    const apiKey = "a3fbf9429t7a57989ac706ao0d0b154f";
    const url = `https://api.shecodes.io/weather/v1/current?query=${query}&key=${apiKey}`;

    axios.get(url).then((response) => {
      setResult({
        city: response.data.city,
        temperature: Math.round(response.data.temperature.current),
      });
    });
  }

  return (
    <div className="container">
      <h1>🌤 Weather Search</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search a city..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>

      {result && (
        <div className="result">
          <h2>{result.city}</h2>
          <p>🌡 Temperature: {result.temperature}°C</p>
        </div>
      )}
    </div>
  );
}
