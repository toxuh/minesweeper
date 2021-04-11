export type Status = 'hidden' | 'marked' | 'mine' | 'number';

export type Tile = {
  x: number;
  y: number;
  key: string;
  status: Status;
  mine: boolean;
  content: string;
};

export type Coords = {
  x: number;
  y: number;
};

export type GameStatus = boolean | 'lose' | 'win';
