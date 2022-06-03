import React from 'react';
import { convertTime } from './../../state/selectors';
import { StyReply } from './style-comments';

function Reply({ reply: { deleted, by, text, time } }) {
  return (
    <StyReply>
      {deleted ? (
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
