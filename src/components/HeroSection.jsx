import { ArrowDown } from "lucide-react";
import { useState, useEffect } from "react";
import { useTypingAnimation } from "@/hooks/useTypingAnimation";

export const HeroSection = () => {
  const [showName, setShowName] = useState(false);
  const [showDescription, setShowDescription] = useState(false);
  const [showButton, setShowButton] = useState(false);

  // Greeting text - show immediately
  const greeting = "Hi, I'm ";

  // Name text - typing animation only for name (faster speed for smoother animation)
  const name = "Pasindu Lakshan";
  const { displayedText: nameText, isTyping: isTypingName } =
    useTypingAnimation(name, 60, showName, 500);

  // Description text - show automatically after name
  const description =
    "I'm a Software Engineering undergraduate with a passion for building responsive, user-friendly web and mobile applications. I work with modern technologies like React, Node.js, and Kotlin to bring ideas to life.";

  // Start typing name after initial delay
  useEffect(() => {
    const timer = setTimeout(() => setShowName(true), 300);
    return () => clearTimeout(timer);
  }, []);

  // Show description after name is done typing
  useEffect(() => {
    if (!isTypingName && nameText === name && showName) {
      const timer = setTimeout(() => setShowDescription(true), 300);
      return () => clearTimeout(timer);
    }
  }, [isTypingName, nameText, name, showName]);

  // Show button after description appears
  useEffect(() => {
    if (showDescription) {
      const timer = setTimeout(() => setShowButton(true), 500);
      return () => clearTimeout(timer);
    }
  }, [showDescription]);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4"
    >
      <div className="container max-w-4xl mx-auto text-center z-10">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight min-h-[4rem] md:min-h-[6rem]">
            <span>{greeting}</span>
            <span className="text-primary">
              {" "}
              {nameText}
              {isTypingName && (
                <span className="inline-block w-0.5 h-[1em] bg-primary ml-1 animate-[blink-cursor_0.8s_ease-in-out_infinite]" />
              )}
            </span>
          </h1>
          <p
            className={`text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto min-h-[3rem] transition-opacity duration-500 ${
              showDescription ? "opacity-100" : "opacity-0"
            }`}
          >
            {description}
          </p>
          <div
            className={`pt-4 transition-opacity duration-500 ${
              showButton ? "opacity-100" : "opacity-0"
            }`}
          >
            <a href="#projects" className="cosmic-button">
              View My Projects
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-sm text-muted-foreground mb-2">Scroll</span>
        <ArrowDown className="h-5 w-5 text-primary" />
      </div>
    </section>
  );
};
