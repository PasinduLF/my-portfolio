import { useState, useEffect } from "react";

/**
 * Custom hook for typing animation effect
 * @param {string} text - The text to type out
 * @param {number} speed - Typing speed in milliseconds (default: 50)
 * @param {boolean} startTyping - Whether to start typing immediately (default: true)
 * @param {number} delay - Delay before starting to type in milliseconds (default: 0)
 * @returns {string} - The current typed text
 */
export const useTypingAnimation = (
  text,
  speed = 50,
  startTyping = true,
  delay = 0
) => {
  const [displayedText, setDisplayedText] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    if (!startTyping || !text) {
      setDisplayedText("");
      setIsTyping(false);
      return;
    }

    let timeoutId;
    let currentIndex = 0;

    const startDelay = setTimeout(() => {
      setIsTyping(true);
      setDisplayedText("");

      const typeChar = () => {
        if (currentIndex < text.length) {
          setDisplayedText(text.slice(0, currentIndex + 1));
          currentIndex++;
          
          // Variable speed for more natural typing
          // Spaces and punctuation get slightly longer delay
          const char = text[currentIndex - 1];
          let charSpeed = speed;
          
          if (char === " ") {
            charSpeed = speed * 0.5; // Faster for spaces
          } else if (char === "." || char === "," || char === "!") {
            charSpeed = speed * 1.5; // Slightly slower for punctuation
          } else {
            // Add slight randomness for natural variation (within 20% of base speed)
            charSpeed = speed * (0.8 + Math.random() * 0.4);
          }
          
          timeoutId = setTimeout(typeChar, charSpeed);
        } else {
          setIsTyping(false);
        }
      };

      typeChar();
    }, delay);

    return () => {
      clearTimeout(startDelay);
      clearTimeout(timeoutId);
    };
  }, [text, speed, startTyping, delay]);

  return { displayedText, isTyping };
};

