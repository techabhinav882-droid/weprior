import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";

interface AnimatedHeroTextProps {
  staticText: string;
  animatedWords: string[];
  className?: string;
}

export function AnimatedHeroText({
  staticText,
  animatedWords,
  className = "",
}: AnimatedHeroTextProps) {
  const [wordIndex, setWordIndex] = useState(0);
  const words = useMemo(() => animatedWords, [animatedWords]);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (wordIndex === words.length - 1) {
        setWordIndex(0);
      } else {
        setWordIndex(wordIndex + 1);
      }
    }, 2000);
    return () => clearTimeout(timeoutId);
  }, [wordIndex, words]);

  return (
    <h1 className={className}>
      <span>{staticText}</span>
      <br />
      <span className="relative inline-block w-full min-h-[1.2em] md:min-h-[2.4em] overflow-visible text-center md:pb-4 md:pt-1">
        {words.map((word, index) => (
          <motion.span
            key={index}
            className="absolute left-0 right-0 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent font-bold whitespace-normal"
            initial={{ opacity: 0, y: "-100" }}
            transition={{ type: "spring", stiffness: 50 }}
            animate={
              wordIndex === index
                ? {
                    y: 0,
                    opacity: 1,
                  }
                : {
                    y: wordIndex > index ? -150 : 150,
                    opacity: 0,
                  }
            }
          >
            {word}
          </motion.span>
        ))}
      </span>
    </h1>
  );
}
