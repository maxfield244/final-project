import React, { useState } from 'react';

function CommentForm({ onSubmit }) {
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim()) {
      onSubmit(text); // send the comment
      setText(''); // clear the comments
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={text}
        onChange={(e) => setText(e.target.value)} // update the page
        placeholder="Add a comment"
      />
      <button type="submit">Post</button>
    </form>
  );
}

export default CommentForm;
