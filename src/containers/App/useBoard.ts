import { MouseEvent, useEffect, useState } from 'react';
import { BOARD_SIZE, NUMBER_OF_MINES } from '../../constants';

import { Coords, GameStatus, Status, Tile } from './types';

type ReturnType = {
  board: Tile[];
  createBoard: () => void;
  endGame: GameStatus;
  handleLeftClick: (tile: Tile) => void;
  handleRightClick: (e: MouseEvent<HTMLDivElement>, tile: Tile) => void;
  minesCount: number;
};

const useBoard = (): ReturnType => {
  const [endGame, setEndGame] = useState<GameStatus>(false);
  const [board, setBoard] = useState<Tile[]>([]);
  const [minesCount, setMinesCount] = useState(NUMBER_OF_MINES);

  const setMines = () => {
    const arr = [] as Coords[];

    while (arr.length < NUMBER_OF_MINES) {
      const c = {
        x: Math.floor(Math.random() * BOARD_SIZE),
        y: Math.floor(Math.random() * BOARD_SIZE),
      } as Coords;

      if (!arr.some((p) => p.x === c.x && p.y === c.y)) {
        arr.push(c);
      }
    }

    return arr;
  };

  const mines = setMines();

  const createBoard = () => {
    const arr = [];

    for (let x = 0; x < BOARD_SIZE; x += 1) {
      const row = [];

      for (let y = 0; y < BOARD_SIZE; y += 1) {
        const tile = {
          x,
          y,
          key: `${x}${y}`,
          status: 'hidden',
          mine: mines.some((p) => p.x === x && p.y === y),
          content: '',
        } as Tile;

        row.push(tile);
      }

      arr.push(row);
    }

    setBoard(arr.flat());
    setEndGame(false);
  };

  const setMinesLeft = (stateBoard: Tile[]) => {
    const markedMines = stateBoard.filter(({ status }) => status === 'marked')
      .length;

    setMinesCount(NUMBER_OF_MINES - markedMines);
  };

  const checkHiddenTiles = (stateBoard: Tile[]) =>
    !!stateBoard.filter((t) => t.status === 'hidden').length;

  const setStatusHandler = (tile: Tile, value: Status) => {
    const i = board.findIndex((t) => t.key === tile.key);

    setBoard((boardState): Tile[] => {
      const newState = boardState.map(
        (o, idx): Tile => {
          if (idx === i) {
            return {
              ...o,
              status: value,
            };
          }

          return o;
        },
      );

      setMinesLeft(newState);

      if (!checkHiddenTiles(newState)) {
        setEndGame('win');
      }

      return newState;
    });
  };

  const setContentHandler = (tile: Tile, value: string) => {
    const i = board.findIndex((t) => t.key === tile.key);

    setBoard((boardState): Tile[] =>
      boardState.map(
        (o, idx): Tile => {
          if (idx === i) {
            return {
              ...o,
              content: value,
            };
          }

          return o;
        },
      ),
    );
  };

  const nearTiles = ({ x, y, key }: Tile) => {
    const tiles = [];

    for (let xOffset = -1; xOffset <= 1; xOffset += 1) {
      for (let yOffset = -1; yOffset <= 1; yOffset += 1) {
        const tile = board.find(
          (t) => t.x === x + xOffset && t.y === y + yOffset,
        );

        if (tile) {
          tiles.push(tile);
        }
      }
    }

    return tiles.filter((t) => t.key !== key);
  };

  const handleLeftClick = (tile: Tile) => {
    const neighborTiles = nearTiles(tile);
    const hasMinesTiles = neighborTiles.filter((t) => t.mine);

    if (endGame) {
      return;
    }

    if (tile.status !== 'hidden') {
      return;
    }

    if (tile.mine) {
      // setStatusHandler(tile, 'mine');
      board.forEach((t) => {
        if (t.mine) {
          setStatusHandler(t, 'mine');
        }
      });
      setEndGame(true);

      return;
    }

    setStatusHandler(tile, 'number');

    if (hasMinesTiles.length === 0) {
      // neighborTiles.forEach((t) => handleLeftClick(t)); // ERROR HERE!!!
    } else {
      setContentHandler(tile, hasMinesTiles.length.toString());
    }
  };

  const handleRightClick = (e: MouseEvent<HTMLDivElement>, tile: Tile) => {
    e.preventDefault();

    if (endGame) {
      return;
    }

    if (tile.status !== 'hidden' && tile.status !== 'marked') {
      return;
    }

    if (tile.status === 'marked') {
      setStatusHandler(tile, 'hidden');
    } else {
      setStatusHandler(tile, 'marked');
    }
  };

  useEffect(() => {
    createBoard();
  }, []);

  return {
    board,
    createBoard,
    endGame,
    handleLeftClick,
    handleRightClick,
    minesCount,
  };
};

export default useBoard;
