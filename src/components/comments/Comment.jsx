import React, { useState } from 'react';
import { StyComment, StyReply } from './style-comments';
import { ReactComponent as ShowReplyBtn } from '../svg/arrow-down-square.svg';
import { ReactComponent as BackReplyBtn } from '../svg/arrow-right-square.svg';
import { convertTime, selectRenderReplies } from './../../state/selectors';
import { getReplies } from '../../state/fetch/fetch-fun';
import { useDispatch, useSelector } from 'react-redux';
import { actRemoveUnRenderedReplies } from './../../state/reducers-actions';

function Comment({ comment }) {
  const { by, type, time, text, kids } = comment;
  const dispatch = useDispatch();
  const [actCommBtn, setActCommBtn] = useState(false);

  const stateReply = useSelector((state) => state.replies.repliesData);
  const replyLoading = useSelector((state) => state.replies.repliesRequest);
  // const renderReplies = selectRenderReplies(stateReply, kids);

  const toggleCommBtns = () => setActCommBtn(!actCommBtn);

  const getReply = () => {
    dispatch(getReplies(kids));
    // console.log(renderReplies);
    toggleCommBtns();
  };

  const closeReply = (repliesId) => {
    toggleCommBtns();
    dispatch(actRemoveUnRenderedReplies(repliesId));
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

            {actCommBtn && <BackReplyBtn onClick={() => closeReply(kids)} />}
            <p> Reply: {kids.length} </p>
          </div>
        )}
      </StyReply>
      <div>
        {actCommBtn &&
          (replyLoading ? (
            <p>Loading....</p>
          ) : (
            stateReply.map(
              ({ id, by }) => kids.includes(id) && <p key={id}>{by}</p>
            )
          ))}
      </div>
    </StyComment>
  );
}

export default Comment;
