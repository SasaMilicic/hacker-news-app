import React, { useState } from 'react';
import styled from 'styled-components';
import { ReactComponent as ShowReplyBtn } from '../../assets/svg/icons/arrow-down-square.svg';
import { ReactComponent as BackReplyBtn } from '../../assets/svg/icons/arrow-right-square.svg';
import Reply from './Reply';

function Replies({ repliesIds }) {
  const [actCommBtn, setActCommBtn] = useState(false);

  const toggleButton = () => setActCommBtn(!actCommBtn);

  return (
    <StyledReplies>
      {repliesIds === undefined ? (
        <div className="off-button">
          <ShowReplyBtn />
          <p> Reply: 0 </p>
        </div>
      ) : (
        <div className="btn-container">
          {!actCommBtn && (
            <ShowReplyBtn className="hover-button" onClick={toggleButton} />
          )}
          {actCommBtn && (
            <BackReplyBtn className="hover-button" onClick={toggleButton} />
          )}

          <div>Reply: {repliesIds.length}</div>
        </div>
      )}
      {actCommBtn && (
        <article>
          {repliesIds.map((replyId) => (
            <Reply key={replyId} replyId={replyId} />
          ))}
        </article>
      )}
    </StyledReplies>
  );
}

export default Replies;

export const StyledReplies = styled.div`
  margin-top: 5px;
  align-items: center;
  gap: 5px;

  .btn-container {
    display: flex;
  }

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
