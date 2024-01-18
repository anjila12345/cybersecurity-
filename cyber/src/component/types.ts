export interface IWordsearch {
    grid: string[][]; // 2d array containing letters
    words: string[]; // The words to be found
    width: number; // Number of columns in the grid
    height: number; // Number of rows in the grid
  }
  
  // [row, column]
  export type GridCell = [number, number];
  
  // Array containing adjacent grid locations
  export type WordMatch = GridCell[];