import "./App.css";
import "modern-normalize";
import Description from "./components/Description/Description";
import Options from "./components/Options/Options";
import Feedback from "./components/Feedback/Feedback";
import { useEffect, useState } from "react";
import Notification from "./components/Notification/Notification";

function App() {
  const [feedbackValues, setFeedbackValues] = useState(() => {
    const storedFeedback = window.localStorage.getItem("feedbackValues");
    if (storedFeedback !== null) {
      return JSON.parse(storedFeedback);
    } else {
      return { good: 0, neutral: 0, bad: 0 };
    }
  });

  const totalFeedbacks =
    feedbackValues.good + feedbackValues.neutral + feedbackValues.bad;

  const updateFeedback = (feedbackType) => {
    setFeedbackValues({
      ...feedbackValues,
      [feedbackType]: feedbackValues[feedbackType] + 1,
    });
  };

  const resetValues = () => {
    setFeedbackValues({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  };

  useEffect(() => {
    window.localStorage.setItem(
      "feedbackValues",
      JSON.stringify(feedbackValues)
    );
  }, [feedbackValues]);

  const positivePercent = Math.round(
    (feedbackValues.good / totalFeedbacks) * 100
  );

  return (
    <>
      <Description />
      <Options
        onUpdate={updateFeedback}
        totalFeedbacks={totalFeedbacks}
        onReset={resetValues}
      />
      {Boolean(totalFeedbacks) && (
        <Feedback
          good={feedbackValues.good}
          neutral={feedbackValues.neutral}
          bad={feedbackValues.bad}
          total={totalFeedbacks}
          positive={positivePercent}
        />
      )}
      <Notification totalFeedbacks={totalFeedbacks} />
    </>
  );
}

export default App;
