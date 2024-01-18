import { WordMatch, IWordsearch, GridCell } from "./types";

const DIRECTION_MAPPINGS = [
  [-1, 0],
  [-1, 1],
  [0, 1],
  [1, 1],
  [1, 0],
  [1, -1],
  [0, -1],
  [-1, -1]
];

// Case-insensitively compares 2 strings
const compareStrings = (string1: string, string2: string) =>
  string1.toLowerCase() === string2.toLowerCase();

export class Wordsearch implements IWordsearch {
  constructor(
    public grid: string[][],
    public words: string[],
    public width: number,
    public height: number
  ) {}

  solve() {
    let matches: WordMatch[] = [];

    for (let word of this.words) {
      matches.push(this.findWord(word));
    }

    return matches;
  }

  findLetter(letter: string) {
    let output: GridCell[] = [];

    for (let i = 0; i < this.height; i++) {
      for (let j = 0; j < this.width; j++) {
        if (compareStrings(this.grid[i][j], letter)) {
          output.push([i, j]);
        }
      }
    }

    return output;
  }

  getNeighbourCell(cell: GridCell, dir: number): GridCell | undefined {
    const offset = DIRECTION_MAPPINGS[dir];
    let i = cell[0] + offset[0];
    let j = cell[1] + offset[1];

    // If the new location is within the bounds of the grid
    if (i >= 0 && i < this.height && j >= 0 && j < this.width) {
      return [i, j];
    }
  }

  findWord(word: string) {
    let startPositions = this.findLetter(word[0]);
    let path: GridCell[] = [];

    for (let startPosition of startPositions) {
      for (let dir = 0; dir < 8; dir++) {
        path = [startPosition];

        // Since letter 0's position is already known
        let letterIndex = 1;

        let currentCell = startPosition;

        while (letterIndex < word.length) {
          // Gets the next cell in the current direction
          let newCell = this.getNeighbourCell(currentCell, dir);

          // Checks if the next cell corresponds to the next letter
          if (
            newCell &&
            compareStrings(this.grid[newCell[0]][newCell[1]], word[letterIndex])
          ) {
            currentCell = newCell;
            path.push(currentCell);
          } else {
            break;
          }

          letterIndex++;
        }

        // If the while loop had reached its end
        if (letterIndex >= word.length) return path;
        // Can also be if (path.length === word.length)
      }
    }

    throw new Error("Puzzle has no solution");
  }
}
