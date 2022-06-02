import React from 'react';

function Reply({ reply: { by, text } }) {
  return (
    <div>
      <h5> {by} </h5>
      <p> {text} </p>
    </div>
  );
}

export default Reply;
