import React, { useState } from 'react';

function GameForm({ onAddGame }) {
  const [title, setTitle] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault(); // prevents page reload
    if (title.trim()) { // non empty input
      onAddGame(title); // calling the function
      setTitle(''); // clear the field
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Add a new game"
      />
      <button type="submit">Add Game</button>
    </form>
  );
}

export default GameForm;
