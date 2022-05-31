import React, { useState } from 'react';
import { StyComment, StyReply } from './style-comments';
import { ReactComponent as ShowReplyBtn } from '../svg/arrow-down-square.svg';
import { ReactComponent as BackReplyBtn } from '../svg/arrow-right-square.svg';
import { convertTime } from './../../state/selectors';

function Comment({ comment }) {
  const { by, type, time, text, kids } = comment;
  const [actCommBtn, setActCommBtn] = useState(false);

  const toggleCommBtns = () => setActCommBtn(!actCommBtn);

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
        {kids === undefined ? (
          <div className="off-button">
            <ShowReplyBtn />
            <p> Reply: 0 </p>
          </div>
        ) : (
          <div>
            {!actCommBtn && <ShowReplyBtn onClick={toggleCommBtns} />}
            {actCommBtn && <BackReplyBtn onClick={toggleCommBtns} />}
            <p> Reply: {kids.length} </p>
          </div>
        )}
      </StyReply>
    </StyComment>
  );
}

export default Comment;
