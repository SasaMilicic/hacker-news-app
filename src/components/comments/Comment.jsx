import React, { useState } from 'react';
import { StyComment, StyReply } from './style-comments';
import { ReactComponent as ShowReplyBtn } from '../svg/arrow-down-square.svg';
import { ReactComponent as BackReplyBtn } from '../svg/arrow-right-square.svg';
import { convertTime } from './../../state/selectors';
import { getReplies } from '../../state/fetch/fetch-fun';
import { useDispatch } from 'react-redux';

function Comment({ comment }) {
  const { by, type, time, text, kids } = comment;
  const dispatch = useDispatch();
  const [actCommBtn, setActCommBtn] = useState(false);

  const toggleCommBtns = () => setActCommBtn(!actCommBtn);

  const getReply = () => {
    dispatch(getReplies(kids));

    toggleCommBtns();
  };

  const closeReply = () => {
    toggleCommBtns();
  };

  return (
    <StyComment>
      <h3>
        {type} by: {by}
        <div>{convertTime(time)}</div>
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
            {!actCommBtn && <ShowReplyBtn onClick={() => getReply()} />}
            {actCommBtn && <BackReplyBtn onClick={() => closeReply()} />}
            <p> Reply: {kids.length} </p>
          </div>
        )}
      </StyReply>
      <div>
        {actCommBtn &&
          kids.map((reply) => {
            <p key={reply}>{reply}</p>;
          })}
      </div>
    </StyComment>
  );
}

export default Comment;
