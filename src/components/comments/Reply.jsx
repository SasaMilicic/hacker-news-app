import React from 'react';
import { convertTime } from './../../state/selectors';
import { StyReply } from './style-comments';
import { useSelector } from 'react-redux';

function Reply({ reply }) {
  const { deleted, by, text, time, id } = reply;

  const error = useSelector((state) => state.replies.error);

  const isReplyEmpty = (element) => {
    const { id, ...storyElements } = element;
    return Object.keys(storyElements).length === 0;
  };

  return (
    <StyReply>
      {isReplyEmpty(reply) ? (
        <div className="error">
          <h5>
            {error} '{id}'
          </h5>
        </div>
      ) : deleted ? (
        <div className="deleted">
          <h5>Reply deleted!</h5>
        </div>
      ) : (
        <>
          <div>
            <h5>Reply by: {by}</h5>
            <h5 className="style-time">{convertTime(time)}</h5>
          </div>
          <p dangerouslySetInnerHTML={{ __html: text }} />
        </>
      )}
    </StyReply>
  );
}

export default Reply;
