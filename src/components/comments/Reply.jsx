import React from 'react';
import { convertTime } from './../../state/selectors';

function Reply({ reply: { by, text, time } }) {
  return (
    <div>
      <h1>{convertTime(time)}</h1>
      <h5> {by} </h5>
      <p> {text} </p>
    </div>
  );
}

export default Reply;
