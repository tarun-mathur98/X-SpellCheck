import React, { useState, useEffect } from "react";

const customDictionary = {
  teh: "the",
  wrok: "work",
  fot: "for",
  exampl: "example",
};

function App() {
  const [text, setText] = useState("");
  const [suggestion, setSuggestion] = useState("");

  const checkSpelling = (inputText) => {
    const words = inputText.split(" ");

    for (const word of words) {
      const lowerWord = word.toLowerCase();
      if (customDictionary[lowerWord]) {
        return `Did you mean: ${customDictionary[lowerWord]}?`;
      }
    }
    return "";
  };


  useEffect(() => {
    if (text.trim() === "") {
      setSuggestion("");
    } else {
      const foundSuggestion = checkSpelling(text);
      setSuggestion(foundSuggestion);
    }
  }, [text]);

  const handleChange = (event) => {
    setText(event.target.value);
  };

  return (
    <div>
      <h1>Spell Check and Auto-Correction</h1>
      <textarea
        value={text}
        onChange={handleChange}
        placeholder="Enter text..."
        rows={10}
        cols={50}
      />
      {suggestion && <p>{suggestion}</p>}
    </div>
  );
}

export default App;
