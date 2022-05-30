import React, { useState } from 'react';
import { StyComment, StyReply } from './style-comments';

function Comment({ comment }) {
  const [activeButton, setActiveButton] = useState(false);

  const { by, type, time, text, kids } = comment;

  const convertTime = (time) => new Date(time).toUTCString().slice(5, 22);
  const toggleButton = () => setActiveButton(!activeButton);

  return (
    <StyComment>
      <h3>
        {type} by: {by}
        <span>{convertTime(time)}</span>
      </h3>
      <div>
        {text && text.length > 500 ? (
          <p>
            <span dangerouslySetInnerHTML={{ __html: text }} />

            {activeButton && <button onClick={toggleButton}> M O R E </button>}
            {!activeButton && <button onClick={toggleButton}> L E S S</button>}
          </p>
        ) : (
          <p dangerouslySetInnerHTML={{ __html: text }} />
        )}
      </div>
      <StyReply>Reply: {kids === undefined ? 0 : kids.length}</StyReply>
    </StyComment>
  );
}

export default Comment;
