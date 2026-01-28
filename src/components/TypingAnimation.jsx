/* eslint-disable react/prop-types */

import  { useState, useEffect } from 'react';

const TypingAnimation = ({ staticText, animatedText, speed = 100 }) => {
  const [displayText, setDisplayText] = useState('');
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => prevIndex + 1);
      setDisplayText(animatedText.slice(0, index + 1));
      if (index + 1 >= animatedText.length) {
        clearInterval(interval);
        setTimeout(() => {
          setIndex(0);
          setDisplayText('');
        }, 1000); // Pause before restarting
      }
    }, speed);

    return () => clearInterval(interval);
  }, [index, animatedText, speed]);

  return (
    <span>
      {staticText}
      {displayText}
    </span>
  );
};

export default TypingAnimation;
