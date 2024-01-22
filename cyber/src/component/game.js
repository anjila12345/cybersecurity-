// WordFindGame.js

import React, { useState, useEffect } from 'react';
import './WordFindGame.css';

const WordFindGame = () => {
  const [board, setBoard] = useState([]);
  const [selectedLetters, setSelectedLetters] = useState([]);
  const [discoveredWords, setDiscoveredWords] = useState([]);
  const [definition, setDefinition] = useState('');
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [showFinishButton, setShowFinishButton] = useState(false);
  const [selectedWordDefinition, setSelectedWordDefinition] = useState('');
  //const history = useHistory(); to use next page

  const initialBoard = [
    ['S', 'V', 'Y', 'T', 'L', 'B', 'A', 'Y', 'C', 'G', 'Q', 'E', 'N', 'B', 'S'],
    ['Z', 'S', 'E', 'E', 'I', 'S', 'D', 'X', 'R', 'J', 'Y', 'I', 'T', 'X', 'J'],
    ['M', 'X', 'V', 'T', 'F', 'C', 'W', 'E', 'S', 'G', 'O', 'E', 'Y', 'T', 'C'],
    ['X', 'O', 'I', 'R', 'O', 'G', 'A', 'L', 'L', 'Z', 'N', 'Y', 'N', 'Z', 'T'],
    ['F', 'S', 'R', 'W', 'G', 'M', 'R', 'D', 'J', 'T', 'O', 'J', 'P', 'Q', 'R'],
    ['Q', 'O', 'H', 'B', 'U', 'Q', 'E', 'T', 'O', 'T', 'I', 'V', 'N', 'F', 'M'],
    ['Y', 'L', 'L', 'U', 'B', 'R', 'E', 'B', 'Y', 'C', 'T', 'G', 'W', 'Z', 'C'],
    ['L', 'A', 'O', 'H', 'P', 'R', 'A', 'T', 'W', 'C', 'P', 'N', 'U', 'B', 'E'],
    ['A', 'N', 'D', 'E', 'W', 'C', 'G', 'T', 'S', 'G', 'Y', 'I', 'G', 'C', 'R'],
    ['S', 'L', 'Z', 'B', 'K', 'B', 'R', 'L', 'B', 'T', 'R', 'K', 'C', 'Y', 'A'],
    ['M', 'Y', 'E', 'D', 'S', 'F', 'Y', 'T', 'C', 'K', 'C', 'C', 'I', 'B', 'W'],
    ['W', 'U', 'O', 'B', 'Q', 'H', 'E', 'M', 'M', 'A', 'N', 'A', 'M', 'T', 'L'],
    ['C', 'O', 'R', 'O', 'T', 'A', 'C', 'I', 'T', 'N', 'E', 'H', 'T', 'U', 'A'],
    ['R', 'C', 'A', 'T', 'F', 'I', 'S', 'H', 'I', 'N', 'G', 'S', 'S', 'X', 'M'],
    ['F', 'U', 'T', 'M', 'H', 'Z', 'K', 'D', 'E', 'D', 'E', 'E', 'X', 'F', 'W']
];


  const initialWordsList = [
    { word: 'cyberbully', definition: 'The defination for Cyberbully: A person who uses the Internet to harass or intimidate others.' },
    { word: 'Adware', definition: 'The defination for Adware: Software that automatically displays or downloads advertising material (often unwanted) when a user is online.' },
    { word: 'malware', definition: 'The defination for Malware: Malicious software designed to harm or exploit digital devices, networks, and data.' },
    { word: 'Authenticator', definition: 'The defination for Authenticator: A device or tool that verifies the identity of a user, system, or process.' },
    { word: 'Backdoor', definition: 'The defination for Backdoor: A hidden, unauthorized means of accessing a system, application, or network.' },
    { word: 'Hacking', definition: 'The defination for Hacking: The unauthorized access, manipulation, or compromise of computer systems or data.' },
    { word: 'Botnet', definition: 'The defination for Botnet: A network of infected computers controlled by a single entity, often used for malicious purposes.' },
    { word: 'Bug', definition: 'The defination for Bug: An error or flaw in software that causes it to behave unexpectedly or produce incorrect results.' },
    { word: 'Catfishing', definition: 'The defination for Catfishing: The act of creating a fake online persona to deceive others, usually for personal gain or to harm.' },
    { word: 'Encryption', definition: 'The defination for Encryption: The process of converting information into a code to prevent unauthorized access.' }
  ];


  useEffect(() => {
    const generateBoard = () => {
      setBoard([...initialBoard]);
    };
  
    generateBoard();
  
    // No external dependencies used, so it's safe to exclude from the dependency array
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const generateBoard = () => {
    setBoard([...initialBoard]);
  };

  const isValidSelection = (selectedLetters, newLetter) => {
    const prevSelection = selectedLetters[selectedLetters.length - 1];

    if (!prevSelection) {
      return true; // First letter, always valid
    }

    const isAdjacent =
      Math.abs(prevSelection.row - newLetter.row) <= 1 && Math.abs(prevSelection.col - newLetter.col) <= 1;

    return isAdjacent && !selectedLetters.some(
      (selected) => selected.row === newLetter.row && selected.col === newLetter.col
    );
  };

  const selectLetter = (rowIndex, letterIndex) => {
    if (!gameOver) {
      const selectedLetter = { letter: board[rowIndex][letterIndex], row: rowIndex, col: letterIndex };

      if (isValidSelection(selectedLetters, selectedLetter)) {
        setSelectedLetters([...selectedLetters, selectedLetter]);
      }
    }
  };

  const showDefinition = () => {
    const word = selectedLetters.map((selected) => selected.letter).join('').toLowerCase();
    const foundWord = initialWordsList.find((wordObj) => wordObj.word.toLowerCase() === word);

    if (foundWord && !gameOver && !discoveredWords.includes(foundWord.word)) {
      setDiscoveredWords((prevDiscoveredWords) => [...prevDiscoveredWords, foundWord.word]);
      setSelectedLetters([]);

      // Check if all words are discovered
      if (discoveredWords.length + 1 === initialWordsList.length) {
        setScore(score + 100);
        setDefinition(`Congratulations! You found all words. Your Score: ${score + 100}`);
        setGameOver(true);
        setShowFinishButton(true);
      } else {
        setScore(score + 100);
        //setDefinition(`Definition for ${foundWord.word}: ${foundWord.definition}`); // checking the
        setSelectedWordDefinition(foundWord.definition); // Set the selected word's definition
      }
    }

    // Check if the score reaches 1000
    if (score >= 1000) {
      setShowFinishButton(true);
      setGameOver(true);
    }
  };
    
  
  const clearBoard = () => {
    setSelectedLetters([]);
    setDefinition('');
    setSelectedWordDefinition('');
  };

  const resetGame = () => {
    generateBoard();
    setDiscoveredWords([]);
    setSelectedLetters([]);
    setDefinition('');
    setScore(0);
    setGameOver(false);
    setShowFinishButton(false);
    setSelectedWordDefinition('');
  };
// link to another leadther board page
  const finishGame = () => {
    alert(`Game Finished! Your Score: ${score}`);
    // You can add further logic for ending the game or navigating to another page. history.push('/leaderboard');



  };
  const quitGame = () => {
    alert(`Game quit. Your final score: ${score}`);
    setGameOver(true);
    // You can add further logic for ending the game or navigating to another page. history.push('/leaderboard');
  };

  return (
    <div className="word-find-game">
      <div className="left-column">
        <h1>Word Find Game</h1>
        <ul>
          {initialWordsList.map((wordObj, index) => (
            <li key={index} className={discoveredWords.includes(wordObj.word) ? 'discovered' : ''}>
              {wordObj.word}
            </li>
          ))}
        </ul>
        <p className="word-definition">{definition}</p>
        <p className="score">Score: {score}</p>
      </div>
      <div className="right-column">
        <div className="board-container">
          <table className="letter-table">
            <tbody>
              {board.map((row, rowIndex) => (
                <tr key={rowIndex} className="board-row">
                  {row.map((letter, letterIndex) => (
                    <td
                      key={letterIndex}
                      className={`letter ${selectedLetters.some(selected => selected.row === rowIndex && selected.col === letterIndex) ? 'selected' : ''}`}
                      onClick={() => selectLetter(rowIndex, letterIndex)}
                    >
                      {letter}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="selected-letters">
          <h2>Selected Letters</h2>
          <p>{selectedLetters.map(selected => selected.letter).join('')}</p>
          <button onClick={showDefinition} disabled={!selectedLetters.length || gameOver}>Show Definition</button>
          <button onClick={clearBoard} disabled={gameOver}>Clear Board</button>
          <button onClick={resetGame}>Reset Game</button>
          <button onClick={quitGame} disabled={gameOver}>
          Quit Game
        </button>
          {showFinishButton && (
            <button onClick={finishGame} disabled={!gameOver}>
              Finish Game
            </button>
          )}
        </div>
      </div>
      <div className="definition-box">
        <h2>Defination:</h2>
        <p>{selectedWordDefinition}</p>
      </div>
      
    </div>
  );
};

export default WordFindGame;
