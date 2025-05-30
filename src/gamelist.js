import React from 'react';
import Game from './Game';

function GameList({ games, onAddComment }) {
  return (
    <div>
      {games.map((game) => (
        <Game key={game.id} game={game} onAddComment={onAddComment} /> //renders the list to pass on game data
      ))}
    </div>
  );
}

export default GameList;
