import React, { useState } from 'react';
import GameForm from './components/GameForm';
import GameList from './components/GameList';

function App() {
  const [games, setGames] = useState([]);

  const addGame = (title) => {
    const newGame = { id: Date.now(), title, comments: [] }; // store the list of games
    setGames([...games, newGame]);
  };

  const addComment = (gameId, commentText) => { //add a new game to the list
    setGames(games.map(game => 
      game.id === gameId
        ? { ...game, comments: [...game.comments, commentText] }
        : game
    ));
  };

  return ( // add games to the array
    <div style={{ padding: '20px' }}>
      <h1>🎮 Video Game Library</h1>
      <GameForm onAddGame={addGame} />
      <GameList games={games} onAddComment={addComment} /> 
    </div>
  );
}

export default App;
