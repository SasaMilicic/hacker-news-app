import React, { useState } from 'react';
import styled from 'styled-components';

import { ReactComponent as ShowReplyBtn } from '../../assets/svg/icons/arrow-down-square.svg';
import { ReactComponent as BackReplyBtn } from '../../assets/svg/icons/arrow-right-square.svg';
import Reply from './Reply';

function Replies({ repliesIds }) {
  const [actCommBtn, setActCommBtn] = useState(false);

  const toggleButton = () => setActCommBtn(!actCommBtn);
  console.log(repliesIds);

  return (
    <StyledReplies>
      {repliesIds === undefined ? (
        <div className="off-button">
          <ShowReplyBtn />
          <p> Reply: 0 </p>
        </div>
      ) : (
        <>
          {!actCommBtn && (
            <ShowReplyBtn
              className="hover-button"
              onClick={toggleButton} /* onClick={() => getReply()}  */
            />
          )}
          {actCommBtn && (
            <BackReplyBtn
              className="hover-button"
              onClick={toggleButton} /*  onClick={() => closeReply()} */
            />
          )}

          <div>Reply: {repliesIds.length}</div>

          {actCommBtn && (
            <article>
              {repliesIds.map((replyId) => (
                <Reply key={replyId} replyId={replyId} />
              ))}
            </article>
          )}
        </>
      )}
    </StyledReplies>
  );
}

export default Replies;

export const StyledReplies = styled.div`
  margin-top: 5px;
  display: flex;
  align-items: center;
  gap: 5px;

  div {
    display: flex;
    align-items: center;
    gap: 5px;
  }

  article {
    margin-top: 5px;
    display: flex;
    flex-direction: column;
    gap: 5px;
  }
  .off-button {
    opacity: 0.5;
  }

  .hover-button {
    cursor: pointer;
  }
`;

const StyledReply = styled.div`
  background-color: grey;
  margin-left: 20px;
  padding: 5px;
  border-radius: 10px;
  display: flex;

  display: flex;
  flex-direction: column;

  p {
    width: 100%;
    font-size: 14px;
  }

  div {
    width: 100%;
    justify-content: space-between;
  }

  .style-time {
    font-style: italic;
  }

  .deleted {
    opacity: 0.4;
  }

  .error {
    opacity: 0.4;
    color: red;
  }
`;

{
  /* <StyReplies> */
}
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
