import React from 'react';
import { useIntl } from 'react-intl';

import { BOARD_SIZE } from '../../constants';

import useBoard from './useBoard';

import messages from './messages';
import './App.scss';

const App: React.FC = () => {
  const intl = useIntl();
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
      <h1 className="Title">{intl.formatMessage(messages.title)}</h1>
      <div className="Status">
        {!endGame ? (
          <span>
            {intl.formatMessage(messages.minesLeft)}: {minesCount}
          </span>
        ) : (
          <span>
            {endGame === 'win'
              ? intl.formatMessage(messages.win)
              : intl.formatMessage(messages.lose)}
          </span>
        )}
      </div>
      <div>
        <button type="button" onClick={createBoard}>
          {intl.formatMessage(messages.tryAgain)}
        </button>
      </div>
      <div
        className="Board"
        style={{ '--size': BOARD_SIZE } as React.CSSProperties}
      >
        {board.map((tile) => (
          <div
            key={tile.key}
            role="presentation"
            className={tile.status}
            onClick={() => handleLeftClick(tile)}
            onContextMenu={(e) => handleRightClick(e, tile)}
          >
            {tile.content}
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
