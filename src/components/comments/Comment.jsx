import React, { useState } from 'react';
import { StyComment, StyReplies } from './style-comments';
import { ReactComponent as ShowReplyBtn } from '../svg/arrow-down-square.svg';
import { ReactComponent as BackReplyBtn } from '../svg/arrow-right-square.svg';
import LoadingReplies from './../LoadingReplies';
import Reply from './Reply';
import { convertTime } from './../../state/selectors';
import { getReplies } from '../../state/fetch/fetch-fun';
import { useDispatch, useSelector } from 'react-redux';
import { actRemoveUnRenderedReplies } from './../../state/reducers-actions';

function Comment({ comment }) {
  const { by, type, time, text, kids } = comment;
  const dispatch = useDispatch();
  const [actCommBtn, setActCommBtn] = useState(false);

  const stateReply = useSelector((state) => state.replies.repliesData);
  const replyLoading = useSelector((state) => state.replies.repliesRequest);

  const toggleCommBtns = () => setActCommBtn(!actCommBtn);

  const getReply = () => {
    dispatch(getReplies(kids));
    toggleCommBtns();
  };

  const closeReply = (repliesId) => {
    dispatch(actRemoveUnRenderedReplies(repliesId));
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
            {actCommBtn && <BackReplyBtn onClick={() => closeReply(kids)} />}
            <div>
              Reply: {kids.length}
              {replyLoading && <LoadingReplies />}
            </div>
          </div>
        )}

        {actCommBtn && !replyLoading && (
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

// {actCommBtn &&
//   !replyLoading &&
//   stateReply.map((reply) => {
//     return (
//       kids.includes(reply.id) && <Reply key={reply.id} reply={reply} />
//     );
//   })}
