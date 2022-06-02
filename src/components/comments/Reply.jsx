import React from 'react';
import { convertTime } from './../../state/selectors';
import { StyReply } from './style-comments';

function Reply({ reply: { by, text, time } }) {
  return (
    <StyReply>
      <div>
        <h5>comment by: {by}</h5>
        <h5 className="style-time">{convertTime(time)}</h5>
      </div>
      <p dangerouslySetInnerHTML={{ __html: text }} />
    </StyReply>
  );
}

export default Reply;
