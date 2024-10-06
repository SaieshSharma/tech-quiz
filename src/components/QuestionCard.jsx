import { useState, useEffect } from 'react';

// Utility function to decode HTML entities
const decodeHtml = (html) => {
  const txt = document.createElement('textarea');
  txt.innerHTML = html;
  return txt.value;
};

const shuffleArray = (array) => {
  return array.sort(() => Math.random() - 0.5);
};

const QuestionCard = ({ question, selectedAnswer, onAnswerSelect }) => {
  const { question: questionText, correct_answer, incorrect_answers } = question;

  // Combine correct and incorrect answers
  const combinedAnswers = [correct_answer, ...incorrect_answers];
  
  // Local state for shuffled answers
  const [shuffledAnswers, setShuffledAnswers] = useState([]);

  useEffect(() => {
    // Shuffle only once when the component mounts
    setShuffledAnswers(shuffleArray(combinedAnswers));
  }, [question]);

  // Decode the question and answers
  const decodedQuestionText = decodeHtml(questionText);
  const decodedAnswers = shuffledAnswers.map(answer => decodeHtml(answer));

  const handleAnswerChange = (answer) => {
    onAnswerSelect(answer); // Pass the selected answer back to the parent
  };

  return (
    <div className="question-card bg-gray-100 p-4 mb-4 rounded">
      <h2 className="font-bold">{decodedQuestionText}</h2>
      <form>
        <ul>
          {decodedAnswers.map((answer, index) => (
            <li key={index}>
              <label>
                <input
                  type="radio"
                  name="answer"
                  value={answer}
                  checked={selectedAnswer === answer}
                  onChange={() => handleAnswerChange(answer)}
                />
                {answer}
              </label>
            </li>
          ))}
        </ul>
      </form>
    </div>
  );
};

export default QuestionCard;
