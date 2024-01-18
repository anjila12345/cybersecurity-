import { GridCell, WordMatch } from "./types";
import { Wordsearch } from "./wordsearch";

const LETTER_PADDING = 0.5;
const LETTER_MARGIN = 50;

export const parseFile = (file: File): Promise<Wordsearch> => {
  const reader = new FileReader();

  return new Promise((resolve, reject) => {
    reader.addEventListener("load", () => {
      let result = reader.result as string;
      let lines = result.trim().split("\n");

      let grid: string[][] = [];
      let words: string[] = [];
      let pastDelimiter = false;

      for (let i = 0; i < lines.length; i++) {
        let line = lines[i].trim();

        if (line === "///") {
          pastDelimiter = true;
          continue;
        }

        if (pastDelimiter) {
          words.push(line);
        } else {
          // Splits up the string of letters into an array
          grid.push(line.split(""));

          // If the length of the last line is not
          // the same as the length of this line
          if (grid[i - 1] && grid[i].length !== grid[i - 1].length) {
            throw new Error("Invalid grid");
          }
        }
      }

      if (words.length === 0) {
        throw new Error("No words provided");
      }

      let width = grid[0].length;
      let height = grid.length;

      let puzzle = new Wordsearch(grid, words, width, height);

      resolve(puzzle);
      console.log(puzzle);
    });

    reader.readAsText(file);
  });
};

const toCanvasCoords = (position: GridCell) => {
  return [
    (position[0] + LETTER_PADDING) * LETTER_MARGIN,
    (position[1] + LETTER_PADDING) * LETTER_MARGIN
  ];
};

const resizeCanvas = (
  canvas: HTMLCanvasElement,
  width: number,
  height: number
) => {
  let [canvasWidth, canvasHeight] = toCanvasCoords([width, height]);
  canvas.width = canvasWidth;
  canvas.height = canvasHeight;
};

export const clearGrid = (canvas: HTMLCanvasElement) => {
  const ctx = canvas.getContext("2d");
  if (!ctx) return;
  canvas.width = 0;
  canvas.height = 0;
};

export const drawGrid = (canvas: HTMLCanvasElement, puzzle: Wordsearch) => {
  const ctx = canvas.getContext("2d");
  if (!ctx) return;

  // Also clears the grid
  resizeCanvas(canvas, puzzle.width, puzzle.height);

  // Set up font attributes
  ctx.font = "30px monospace";
  ctx.textBaseline = "middle";
  ctx.textAlign = "center";

  for (let i = 0; i < puzzle.height; i++) {
    let row = puzzle.grid[i];

    for (let j = 0; j < puzzle.width; j++) {
      const [x, y] = toCanvasCoords([j, i]);
      ctx.fillText(row[j], x, y);
    }
  }
};

export const drawMatch = (canvas: HTMLCanvasElement, match: WordMatch) => {
  const ctx = canvas.getContext("2d");
  if (!ctx) return;

  let startPosition = toCanvasCoords(match[0]);
  let endPosition = toCanvasCoords(match[match.length - 1]);

  // To show up behind the grid
  ctx.globalCompositeOperation = "destination-over";

  // Red with 40% opacity
  ctx.strokeStyle = "rgba(255, 0, 0, 0.4)";

  ctx.lineCap = "round";
  ctx.lineWidth = 30;

  ctx.beginPath();

  // Position is in the format [row (y), column (x)]
  // , but we need the x component, and then the y
  ctx.moveTo(startPosition[1], startPosition[0]);
  ctx.lineTo(endPosition[1], endPosition[0]);
  ctx.stroke();
};
