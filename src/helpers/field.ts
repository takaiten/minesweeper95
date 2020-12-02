import { FieldCell, FieldArray, FieldCellPosition } from '../models/GameModels';

const randInt = (to: number) => Math.floor(Math.random() * to);
const clamp = (x: number, a = 0, b = 1) => Math.min(Math.max(x, a), b);
const range = (n: number) => Array.from(Array(n).keys());

export const createFieldCell = (): FieldCell => ({
  isOpened: false,
  isQuestioned: false,
  hasFlag: false,
  hasMine: false,
  bombsAround: 0,
});

const getNeighborCellBounds = (field: FieldArray, position: FieldCellPosition, depth = 1) => {
  const leftBound = Math.max(position.x - depth, 0);
  const rightBound = Math.min(position.x + depth, field.length - 1);
  const lowerBound = Math.max(position.y - depth, 0);
  const upperBound = Math.min(position.y + depth, field[0].length - 1);

  return [leftBound, rightBound, lowerBound, upperBound];
};

const getBombsAround = (field: FieldArray, position: FieldCellPosition) => {
  const [leftBound, rightBound, lowerBound, upperBound] = getNeighborCellBounds(field, position);

  let bombsAround = 0;
  for (let i = leftBound; i < rightBound + 1; i++) {
    for (let j = lowerBound; j < upperBound + 1; j++) {
      bombsAround += +field[i][j].hasMine;
    }
  }

  return bombsAround;
};

export const createGameField = (width: number, height: number, bombs: number): FieldArray => {
  const field = Array(width)
    .fill(null)
    .map(() =>
      Array(height)
        .fill(null)
        .map(() => createFieldCell()),
    );

  let bombsLeft = bombs;
  while (bombsLeft) {
    const x = randInt(width);
    const y = randInt(height);
    const cell = field[x][y];

    if (cell.hasMine) continue;
    cell.hasMine = true;
    bombsLeft--;
  }

  for (let i = 0; i < width; i++) {
    for (let j = 0; j < height; j++) {
      if (field[i][j].hasMine) {
        continue;
      }
      field[i][j].bombsAround = getBombsAround(field, { x: i, y: j });
    }
  }

  return field;
};

export const rightClickOnCell = (field: FieldArray, position: FieldCellPosition): number => {
  const cell = field[position.x][position.y];
  switch (true) {
    case cell.isOpened:
      return 0;
    case cell.hasFlag:
      cell.hasFlag = false;
      cell.isQuestioned = true;
      return -1;
    case cell.isQuestioned:
      cell.isQuestioned = false;
      return 0;
    default:
      cell.hasFlag = true;
      return 1;
  }
};

export const leftClickOnCell = (field: FieldArray, position: FieldCellPosition): boolean => {
  const cell = field[position.x][position.y];
  if (cell.hasMine) {
    return true;
  }
  if (cell.isOpened || cell.isQuestioned || cell.hasFlag) {
    return false;
  }

  cell.isOpened = true;

  if (cell.bombsAround === 0) {
    const [leftBound, rightBound, lowerBound, upperBound] = getNeighborCellBounds(field, position);

    for (let i = leftBound; i < rightBound + 1; i++) {
      for (let j = lowerBound; j < upperBound + 1; j++) {
        leftClickOnCell(field, { x: i, y: j });
      }
    }
  }
  return false;
};

export const revealField = (field: FieldArray): void => {
  field.forEach((x) => {
    x.forEach((y) => {
      y.isOpened = true;
      y.hasFlag = false;
      y.isQuestioned = false;
    });
  });
};

export const getIconByFieldCell = (cell: FieldCell): string => {
  if (cell.isOpened && cell.hasMine) {
    return '💣';
  } else if (cell.hasFlag) {
    return '🏁';
  } else if (cell.isQuestioned) {
    return '❓';
  } else if (cell.isOpened && cell.bombsAround) {
    return String(cell.bombsAround);
  } else {
    return '‏‏‎ ‎';
  }
};
