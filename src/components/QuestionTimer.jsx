import { useState, useEffect } from "react";

export default function QuestionTimer({ timeout, onTimeout }) {
  const [remainingTime, setRemainingTime] = useState(timeout);

  useEffect(() => {
    const timer = setTimeout(onTimeout, timeout);

    return () => {
        clearInterval(timer); // cleanup
    }
  }, [timeout, onTimeout]);

  useEffect(() => {
    const interval = setInterval(() => {
      setRemainingTime((prevReaminingTime) => prevReaminingTime - 100);
    }, 100);

    return () => {
      clearInterval(interval);
    }; // cleanup
  }, []);

  return (
    <progress id="question-time" max={timeout} value={remainingTime}></progress>
  );
}
