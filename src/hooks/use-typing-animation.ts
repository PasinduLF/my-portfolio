"use client";

import { useEffect, useState } from "react";

export function useTypingAnimation(
  text: string,
  speed = 50,
  startTyping = true,
  delay = 0
) {
  const [displayedText, setDisplayedText] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    if (!startTyping || !text) {
      // Reset state for this (re)start condition; the rest of the animation's
      // setState calls below all happen inside setTimeout callbacks.
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setDisplayedText("");
      setIsTyping(false);
      return;
    }

    let timeoutId: ReturnType<typeof setTimeout>;
    let currentIndex = 0;

    const startDelay = setTimeout(() => {
      setIsTyping(true);
      setDisplayedText("");

      const typeChar = () => {
        if (currentIndex < text.length) {
          currentIndex++;
          setDisplayedText(text.slice(0, currentIndex));

          const char = text[currentIndex - 1];
          let charSpeed = speed;
          if (char === " ") charSpeed = speed * 0.5;
          else if (char === "." || char === "," || char === "!") charSpeed = speed * 1.5;
          else charSpeed = speed * (0.8 + Math.random() * 0.4);

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
}
