import React from 'react';
import {
  FaBomb,
  FaFlag,
  FaRegMeh,
  FaRegSadCry,
  FaRegSmileBeam,
} from 'react-icons/fa';

import { BOARD_SIZE, PLURALS } from '../../constants';

import useBoard from './useBoard';

import './App.scss';

const App: React.FC = () => {
  const {
    board,
    createBoard,
    endGame,
    handleLeftClick,
    handleRightClick,
    minesCount,
  } = useBoard();

  return (
    <div className="App">
      <div className="Status">
        <div className="Counter">{minesCount}</div>
        <div className="GameButton">
          {!endGame ? (
            <span className="Default" role="presentation" onClick={createBoard}>
              <FaRegMeh />
            </span>
          ) : (
            <>
              {endGame === 'win' ? (
                <span className="Win" role="presentation" onClick={createBoard}>
                  <FaRegSmileBeam />
                </span>
              ) : (
                <span
                  className="Lose"
                  role="presentation"
                  onClick={createBoard}
                >
                  <FaRegSadCry />
                </span>
              )}
            </>
          )}
        </div>
        <div className="Counter">100</div>
      </div>
      <div
        className="Board"
        style={{ '--size': BOARD_SIZE } as React.CSSProperties}
      >
        {board.map((tile) => (
          <div
            key={tile.key}
            role="presentation"
            className={`${tile.status} ${PLURALS[Number(tile.content)]}`}
            onClick={() => handleLeftClick(tile)}
            onContextMenu={(e) => handleRightClick(e, tile)}
          >
            {tile.status !== 'hidden' && (
              <span>
                {tile.status === 'number' ? (
                  tile.content
                ) : (
                  <span>
                    {tile.status === 'marked' ? <FaFlag /> : <FaBomb />}{' '}
                  </span>
                )}
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
