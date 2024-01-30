// WordFindGame.js

import React, { Component } from 'react';
import './WordFindGame.css';

class WordFindGame extends Component {
  constructor(props) {
    super(props);

    this.state = {
      board: [],
      selectedLetters: [],
      discoveredWords: [],
      definition: '',
      score: 0,
      gameOver: false,
      showFinishButton: false,
      selectedWordDefinition: '',
    };

    this.initialBoard = [
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

    this.initialWordsList = [
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
  }

  componentDidMount() {
    this.generateBoard();
  }

  generateBoard = () => {
    this.setState({ board: [...this.initialBoard] });
  };

  isValidSelection = (selectedLetters, newLetter) => {
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

  selectLetter = (rowIndex, letterIndex) => {
    if (!this.state.gameOver) {
      const selectedLetter = { letter: this.state.board[rowIndex][letterIndex], row: rowIndex, col: letterIndex };

      if (this.isValidSelection(this.state.selectedLetters, selectedLetter)) {
        this.setState((prevState) => ({ selectedLetters: [...prevState.selectedLetters, selectedLetter] }));
      }
    }
  };

  showDefinition = () => {
    const word = this.state.selectedLetters.map((selected) => selected.letter).join('').toLowerCase();
    const foundWord = this.initialWordsList.find((wordObj) => wordObj.word.toLowerCase() === word);

    if (foundWord && !this.state.gameOver && !this.state.discoveredWords.includes(foundWord.word)) {
      this.setState((prevState) => ({
        discoveredWords: [...prevState.discoveredWords, foundWord.word],
        selectedLetters: [],
        score: prevState.score + 100,
      }));

      // Check if all words are discovered
      if (this.state.discoveredWords.length + 1 === this.initialWordsList.length) {
        this.setState({
          definition: `Congratulations! You found all words. Your Score: ${this.state.score + 100}`,
          gameOver: true,
          showFinishButton: true,
        });
      } else {
        this.setState({
          score: this.state.score + 100,
          selectedWordDefinition: foundWord.definition,
        });
      }
    }

    // Check if the score reaches 1000
    if (this.state.score >= 1000) {
      this.setState({ showFinishButton: true, gameOver: true });
    }
  };

  clearBoard = () => {
    this.setState({ selectedLetters: [], definition: '', selectedWordDefinition: '' });
  };

  resetGame = () => {
    this.generateBoard();
    this.setState({
      discoveredWords: [],
      selectedLetters: [],
      definition: '',
      score: 0,
      gameOver: false,
      showFinishButton: false,
      selectedWordDefinition: '',
    });
  };

  finishGame = () => {
    alert(`Game Finished! Your Score: ${this.state.score}`);
    // You can add further logic for ending the game or navigating to another page. history.push('/leaderboard');
  };

  quitGame = () => {
    alert(`Game quit. Your final score: ${this.state.score}`);
    this.setState({ gameOver: true });
    // You can add further logic for ending the game or navigating to another page. history.push('/leaderboard');
  };

  render() {
    const {
      board,
      selectedLetters,
      discoveredWords,
      definition,
      score,
      gameOver,
      showFinishButton,
      selectedWordDefinition,
    } = this.state;

    return (
      <div className='gameboard'>
        <div className="word-find-game">
          <div className="left-column">
            <h1>Word Find Game</h1>
            <ul>
              {this.initialWordsList.map((wordObj, index) => (
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
                          onClick={() => this.selectLetter(rowIndex, letterIndex)}
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
              <button onClick={this.showDefinition} disabled={!selectedLetters.length || gameOver}>Show Definition</button>
              <button onClick={this.clearBoard} disabled={gameOver}>Clear Board</button>
              <button onClick={this.resetGame}>Reset Game</button>
              <button onClick={this.quitGame} disabled={gameOver}>
                Quit Game
              </button>
              {showFinishButton && (
                <button onClick={this.finishGame} disabled={!gameOver}>
                  Finish Game
                </button>
              )}
            </div>
          </div>
          <div className="definition-box">
            <h2>Definition:</h2>
            <p>{selectedWordDefinition}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default WordFindGame;
