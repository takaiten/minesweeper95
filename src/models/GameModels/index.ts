export interface FieldCell {
  isOpened: boolean;
  isQuestioned: boolean;
  hasFlag: boolean;
  hasMine: boolean;
  bombsAround: number;
}

export type FieldArray = FieldCell[][];

export interface FieldCellPosition {
  x: number;
  y: number;
}
