import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const TypingEffect = ({ text, period }: { text: string; period: number }) => {
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);

  useEffect(() => {
    const handleTyping = () => {
      const fullText = text;
      const isDeletingText = isDeleting;
      //   const currentIndex = loopNum % fullText.length;

      setDisplayText((prevText) => {
        if (isDeletingText) {
          return fullText.substring(0, prevText.length - 1);
        } else {
          return fullText.substring(0, prevText.length + 1);
        }
      });

      if (!isDeletingText && displayText === fullText) {
        setTimeout(() => setIsDeleting(true), period);
      } else if (isDeletingText && displayText === "") {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        setTimeout(() => setIsDeleting(false), 500);
      }
    };

    const typingInterval = setInterval(handleTyping, 100);

    return () => clearInterval(typingInterval);
  }, [displayText, isDeleting, loopNum, period, text]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      whileHover={{ opacity: 1 }}
      className="text-[red]"
      style={{
        fontSize: "24px",
        fontWeight: "bold",

        borderRight: "2px solid red",
        whiteSpace: "nowrap",
        overflow: "hidden",
      }}
    >
      {displayText}
    </motion.div>
  );
};

export default TypingEffect;
