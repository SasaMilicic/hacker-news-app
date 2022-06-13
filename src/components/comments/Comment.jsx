import React, { useState, useEffect } from 'react';
import { getComment } from '../../state/reducers/reducer-comments';
import { useDispatch, useSelector } from 'react-redux';
import LoadingPage from './../loading/LoadingPage';
import styled from 'styled-components';
import { selectComment } from './../../state/selectors';
import { convertTime } from './../../utils/utils-components';
import Replies from './../replies/Replies';

function Comment({ commentId }) {
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useDispatch();

  const comment = useSelector((state) => selectComment(state, commentId));

  useEffect(() => {
    dispatch(getComment(commentId, setIsLoading));
  }, [commentId]);

  if (isLoading) {
    return (
      <div>
        <LoadingPage size={70} />
      </div>
    );
  } else {
    const { type, by, time, text, kids } = comment;
    return (
      <StyledComment>
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
            <Replies repliesIds={kids} />
          </>
        )}
      </StyledComment>
    );
  }
}

export default Comment;

const StyledComment = styled.div`
  border-bottom: 2px solid black;
  padding: 5px;

  h3 {
    display: flex;
    align-items: center;
    justify-content: space-between;

    div {
      font-size: 15px;
      font-style: italic;
    }

    span {
      margin-left: 10px;
    }
  }

  .deleted {
    opacity: 0.4;
  }
`;

//     <StyComment>
//       {comment.deleted ? (
//         <h3 className="deleted">
//           {type} deleted!
//           <div>{convertTime(time)}</div>
//         </h3>
//       ) : (
//         <>
//           <h3>
//             {type} by: {by}
//             <div>{convertTime(time)}</div>
//           </h3>
//           <div>
//             {text && text.length > 500 ? (
//               <p>
//                 <span
//                   dangerouslySetInnerHTML={{
//                     __html: text,
//                   }}
//                 />
//               </p>
//             ) : (
//               <p dangerouslySetInnerHTML={{ __html: text }} />
//             )}
//           </div>

//           <StyReplies>
//             {kids === undefined ? (
//               <div className="off-button">
//                 <ShowReplyBtn />
//                 <p> Reply: 0 </p>
//               </div>
//             ) : (
//               <div>
//                 {!actCommBtn && <ShowReplyBtn onClick={() => getReply()} />}
//                 {actCommBtn && <BackReplyBtn onClick={() => closeReply()} />}
//                 <div>
//                   Reply: {kids.length}
//                   {actCommBtn && !isContainesId && <LoadingReplies />}
//                 </div>
//               </div>
//             )}

//             {actCommBtn && isContainesId && (
//               <article>
//                 {replies.map(
//                   (reply) =>
//                     kids.includes(reply.id) && (
//                       <Reply key={reply.id} reply={reply} />
//                     )
//                 )}
//               </article>
//             )}
//           </StyReplies>
//         </>
//       )}
//     </StyComment>
