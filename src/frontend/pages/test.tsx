import React, { useEffect, useState } from 'react';
import "../../assets/frontend/css/style1.css"
import "../../components/frontend/assets/css/creative-studio.css";
import "../../components/frontend/assets/vendors/themify-icons/css/themify-icons.css";

const App = () => {
  const letters = ['F', 'A', 'T', 'S'];
  const [activeIndex, setActiveIndex] = useState(0);
  const [showFullName, setShowFullName] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (activeIndex < letters.length - 1) {
        setActiveIndex((prevIndex) => prevIndex + 1);
      } else {
        clearInterval(interval);
        setShowFullName(true);
      }
    }, 1000); // Change letter every 1 second

    return () => clearInterval(interval);
  }, [activeIndex, letters.length]);

  const renderAnimatedText = () => {
    switch (letters[activeIndex]) {
      case 'F':
        return 'FUTURE';
      case 'A':
        return 'AI';
      case 'T':
      case 'S':
        return 'TECHNOLOGY\'S';
      default:
        return '';
    }
  };

  return (
    <div className="container">
      <div className="letters">
        {letters.map((letter, index) => (
          <span
            key={index}
            className={`letter ${activeIndex === index ? 'active' : ''}`}
          >
            {letter}
          </span>
        ))}
      </div>
      <div className={`text-below ${showFullName ? 'full-name' : ''}`}>
        {showFullName ? 'FUTURE AI TECHNOLOGY\'S' : renderAnimatedText()}
      </div>
    </div>
  );
};

export default App;
