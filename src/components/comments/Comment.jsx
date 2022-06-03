import React, { useState } from 'react';
import { StyComment, StyReplies } from './style-comments';
import { ReactComponent as ShowReplyBtn } from '../svg/arrow-down-square.svg';
import { ReactComponent as BackReplyBtn } from '../svg/arrow-right-square.svg';
import LoadingReplies from './../LoadingReplies';
import Reply from './Reply';
import { convertTime } from './../../state/selectors';
import { getReplies } from '../../state/fetch/fetch-fun';
import { useDispatch, useSelector } from 'react-redux';

function Comment({ comment }) {
  const { by, type, time, text, kids, id: parentId } = comment;
  const dispatch = useDispatch();
  const [actCommBtn, setActCommBtn] = useState(false);

  const stateReply = useSelector((state) => state.replies.repliesData);

  const toggleCommBtns = () => setActCommBtn(!actCommBtn);
  const parentIds = stateReply.map((rep) => rep.parent);
  const isContainesId = parentIds.includes(parentId);

  const getReply = () => {
    toggleCommBtns();
    if (isContainesId) return;
    dispatch(getReplies(kids));
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
      <StyReplies>
        {kids === undefined ? (
          <div className="off-button">
            <ShowReplyBtn />
            <p> Reply: 0 </p>
          </div>
        ) : (
          <div>
            {!actCommBtn && <ShowReplyBtn onClick={() => getReply()} />}
            {actCommBtn && <BackReplyBtn onClick={() => closeReply()} />}
            <div>
              Reply: {kids.length}
              {actCommBtn && !isContainesId && <LoadingReplies />}
            </div>
          </div>
        )}

        {actCommBtn && isContainesId && (
          <article>
            {stateReply.map((reply) => {
              return (
                kids.includes(reply.id) && (
                  <Reply key={reply.id} reply={reply} />
                )
              );
            })}
          </article>
        )}
      </StyReplies>
    </StyComment>
  );
}

export default Comment;
