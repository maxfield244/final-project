import React from 'react';
import CommentForm from './CommentForm';

function Game({ game, onAddComment }) {
  return (
    <div style={{ border: '1px solid #ccc', padding: '10px', marginTop: '10px' }}>
      <h2>{game.title}</h2>
      <h4>Comments:</h4>
      <ul>
        {game.comments.map((comment, i) => (
          <li key={i}>{comment}</li> // show the comments
        ))}
      </ul>
      <CommentForm onSubmit={(text) => onAddComment(game.id, text)} />
    </div>
  );
}

export default Game;
