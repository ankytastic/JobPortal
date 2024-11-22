import React, { useState } from 'react';
import { Button, Container, FormControl, FormControlLabel, Radio, RadioGroup, Typography, Alert } from '@mui/material';
import './MockTest.css'; // Custom CSS for styling

const MockTest = () => {
  const [selectedLanguage, setSelectedLanguage] = useState('');
  const [randomQuestions, setRandomQuestions] = useState([]);
  const [answers, setAnswers] = useState({});
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);

  const questions = {
    python: [
      { q: "Which of the following is used to define a function in Python?", options: ["func", "def", "function", "funcdef"], correct: "def" },
      { q: "What is the output of: print(2**3)?", options: ["6", "8", "9", "4"], correct: "8" },
      { q: "Which of these is a Python data type?", options: ["int", "str", "list", "All of these"], correct: "All of these" },
      { q: "What is the output of: type(3.14)?", options: ["int", "float", "str", "None"], correct: "float" },
      { q: "Which library is used for data manipulation in Python?", options: ["NumPy", "Pandas", "Scikit-learn", "TensorFlow"], correct: "Pandas" },
      { q: "How do you start a comment in Python?", options: ["//", "#", "/*", "--"], correct: "#" },
      { q: "Which function is used to read input from the user?", options: ["input()", "read()", "scan()", "get()"], correct: "input()" },
      { q: "What is the output of: print('Hello' + 'World')?", options: ["HelloWorld", "Hello World", "Hello+World", "Error"], correct: "HelloWorld" },
      { q: "Which keyword is used to create a loop in Python?", options: ["while", "loop", "for", "Both while and for"], correct: "Both while and for" },
      { q: "What is the file extension for Python files?", options: [".py", ".python", ".txt", ".java"], correct: ".py" },
    ],
    c: [
      { q: "Which of the following is used to print a message in C?", options: ["printf()", "print()", "echo()", "write()"], correct: "printf()" },
      { q: "What does 'C' stand for in programming?", options: ["Code", "Character", "Language C", "None"], correct: "None" },
      { q: "Which operator is used for addition in C?", options: ["+", "-", "*", "/"], correct: "+" },
      { q: "Which keyword is used to declare constants in C?", options: ["constant", "const", "define", "final"], correct: "const" },
      { q: "What is the range of 'int' data type in C?", options: ["-32768 to 32767", "-2147483648 to 2147483647", "-128 to 127", "None"], correct: "-2147483648 to 2147483647" },
      { q: "Which symbol is used to terminate a statement in C?", options: [";", ":", ".", ","], correct: ";" },
      { q: "What does 'return 0;' signify in C?", options: ["Error", "Success", "Null", "None"], correct: "Success" },
      { q: "Which header file is required for printf() function?", options: ["<stdio.h>", "<iostream>", "<conio.h>", "<stdlib.h>"], correct: "<stdio.h>" },
      { q: "How do you start a multi-line comment in C?", options: ["//", "/", "#", "--"], correct: "/" },
      { q: "Which loop is guaranteed to execute at least once in C?", options: ["for", "while", "do-while", "None"], correct: "do-while" },
    ],
    java: [
      { q: "Which keyword is used to declare a class in Java?", options: ["className", "class", "class extends", "define class"], correct: "class" },
      { q: "What is JVM?", options: ["Java Virtual Machine", "Java Virtual Memory", "Java Verification Method", "None"], correct: "Java Virtual Machine" },
      { q: "Which method is the entry point of a Java program?", options: ["start()", "main()", "begin()", "init()"], correct: "main()" },
      { q: "Which of these is not a Java data type?", options: ["int", "float", "double", "real"], correct: "real" },
      { q: "Which access modifier is most restrictive in Java?", options: ["public", "private", "protected", "default"], correct: "private" },
      { q: "Which symbol is used to create an object in Java?", options: ["new", "create", "make", "object"], correct: "new" },
      { q: "Which keyword is used to inherit a class in Java?", options: ["extends", "inherits", "super", "this"], correct: "extends" },
      { q: "Which package is imported by default in Java?", options: ["java.util", "java.lang", "java.io", "java.net"], correct: "java.lang" },
      { q: "What is the size of an int in Java?", options: ["4 bytes", "2 bytes", "8 bytes", "1 byte"], correct: "4 bytes" },
      { q: "Which keyword is used to handle exceptions in Java?", options: ["try", "throw", "catch", "All of these"], correct: "All of these" },
    ],
  };

  const handleLanguageSelect = (language) => {
    // Shuffle questions and select 5 random questions
    const shuffledQuestions = questions[language]
      .sort(() => 0.5 - Math.random())
      .slice(0, 5);

    setSelectedLanguage(language);
    setRandomQuestions(shuffledQuestions);
    setAnswers({}); // Reset answers to clear selected options
    setShowResult(false);
    setScore(0);
  };

  const handleAnswerChange = (index, answer) => {
    setAnswers((prevAnswers) => ({
      ...prevAnswers,
      [index]: answer,
    }));
  };

  const handleSubmit = () => {
    let totalScore = 0;

    randomQuestions.forEach((question, index) => {
      if (answers[index] === question.correct) {
        totalScore += 10;
      }
    });

    setScore(totalScore);
    setShowResult(true);
  };

  return (
    <Container className="mock-test-container">
      <Typography variant="h3" align="center" className="my-4">
        Mock Programming Test
      </Typography>

      {/* Language Selection */}
      <div className="language-selection">
        {Object.keys(questions).map((language) => (
          <Button
            key={language}
            variant="outlined"
            onClick={() => handleLanguageSelect(language)}
            className="language-button"
          >
            {language.charAt(0).toUpperCase() + language.slice(1)}
          </Button>
        ))}
      </div>

      {/* Display Questions */}
      {selectedLanguage && (
        <div className="questions-section">
          <Typography variant="h5" align="center" className="my-4">
            {selectedLanguage.toUpperCase()} Questions
          </Typography>
          <form>
            {randomQuestions.map((question, index) => (
              <div key={index} className="question-item">
                <Typography variant="body1">
                  {index + 1}. {question.q}
                </Typography>
                <FormControl component="fieldset">
                  <RadioGroup
                    name={`question-${index}`}
                    value={answers[index] || ''}
                    onChange={(e) => handleAnswerChange(index, e.target.value)}
                  >
                    {question.options.map((option, i) => (
                      <FormControlLabel
                        key={i}
                        value={option}
                        control={<Radio />}
                        label={option}
                      />
                    ))}
                  </RadioGroup>
                </FormControl>
              </div>
            ))}

            {/* Submit Button */}
            <div className="submit-button-container">
              <Button
                variant="contained"
                color="primary"
                onClick={handleSubmit}
                className="submit-button"
              >
                Submit Test
              </Button>
            </div>
          </form>
        </div>
      )}

      {/* Display Result */}
      {showResult && (
        <Alert variant="filled" severity="success" className="mt-4">
          <Typography variant="h6">
            Your Score: {score}/{randomQuestions.length * 10}
          </Typography>
        </Alert>
      )}
    </Container>
  );
};

export default MockTest;