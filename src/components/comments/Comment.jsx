import React, { useState } from 'react';
import { StyComment, StyReply } from './style-comments';
import { ReactComponent as ShowReply } from '../svg/arrow-down-square.svg';
import { ReactComponent as BackReply } from '../svg/arrow-right-square.svg';

function Comment({ comment }) {
  const { by, type, time, text, kids } = comment;
  const [actCommBtn, setActCommBtn] = useState(false);

  const toggleCommBtns = () => setActCommBtn(!actCommBtn);

  const convertTime = (time) => new Date(time).toUTCString().slice(5, 22);

  return (
    <StyComment>
      <h3>
        {type} by: {by}
        <span>{convertTime(time)}</span>
      </h3>
      <div>
        {text && text.length > 500 ? (
          <p>
            <span
              dangerouslySetInnerHTML={{
                __html: text,
              }}
            />
          </p>
        ) : (
          <p dangerouslySetInnerHTML={{ __html: text }} />
        )}
      </div>
      <StyReply>
        {!actCommBtn && <ShowReply onClick={toggleCommBtns} />}
        {actCommBtn && <BackReply onClick={toggleCommBtns} />}
        Reply:
        {kids === undefined ? 0 : kids.length}
      </StyReply>
    </StyComment>
  );
}

export default Comment;
