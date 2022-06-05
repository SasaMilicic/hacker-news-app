import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { StyComment, StyReplies } from './style-comments';
import { ReactComponent as ShowReplyBtn } from '../../assets/svg/icons/arrow-down-square.svg';
import { ReactComponent as BackReplyBtn } from '../../assets/svg/icons/arrow-right-square.svg';
import LoadingReplies from './../loading/LoadingReplies';
import Reply from './Reply';
import { convertTime, selectReplies } from './../../state/selectors';
import { getReplies } from '../../api/fetch-fun';

function Comment({ comment }) {
  const dispatch = useDispatch();
  const { by, type, time, text, kids, id: parentId } = comment;
  const [actCommBtn, setActCommBtn] = useState(false);
  const stateReplies = useSelector((state) => state.replies);
  const replies = selectReplies(stateReplies);

  const toggleCommBtns = () => setActCommBtn(!actCommBtn);
  const parentIds = replies.map((rep) => rep.parent);
  const isContainesId = parentIds.includes(parentId);

  const getReply = () => {
    toggleCommBtns();
    if (isContainesId) return;
    dispatch(getReplies(kids));
  };
  const closeReply = () => toggleCommBtns();

  return (
    <StyComment>
      {comment.deleted ? (
        <h3 className="deleted">
          {type} deleted!
          <div>{convertTime(time)}</div>
        </h3>
      ) : (
        <>
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
                {replies.map(
                  (reply) =>
                    kids.includes(reply.id) && (
                      <Reply key={reply.id} reply={reply} />
                    )
                )}
              </article>
            )}
          </StyReplies>
        </>
      )}
    </StyComment>
  );
}

export default Comment;
