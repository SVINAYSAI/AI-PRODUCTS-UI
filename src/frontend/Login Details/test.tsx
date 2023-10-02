import React, { useState, useEffect } from "react";
import axios from "axios";

interface Voice {
  _id: string;
  name: string;
  description: string;
}

function App() {
  const [voices, setVoices] = useState<Voice[]>([]);

  useEffect(() => {
    // Replace with your FastAPI backend URL
    axios.get<Voice[]>("http://127.0.0.1:8000/voices").then((response) => {
      setVoices(response.data);
    });
  }, []);

  return (
    <div className="App">
      <h1>Voice Data from MongoDB</h1>
      <ul>
        {voices.map((voice) => (
          <li key={voice._id}>
            {voice.name}: {voice.description}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
