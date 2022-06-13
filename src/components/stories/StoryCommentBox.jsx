import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { ReactComponent as ScoreIcon } from '../../assets/svg/icons/hand-thumbs-up-fill.svg';

function StoryCommentBox({ story }) {
  const { id, kids, score } = story;

  return (
    <StyledCommentBox>
      {kids === undefined ? (
        <button className="off-button"> 0 comments </button>
      ) : (
        <button>
          <Link to={'/comments/' + id}>{kids.length} comments</Link>
        </button>
      )}
      <p>
        | <ScoreIcon /> {score}
      </p>
    </StyledCommentBox>
  );
}

export default StoryCommentBox;

const StyledCommentBox = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;

  .off-button {
    opacity: 0.5;
    color: white;
  }

  button {
    margin: 5px 0;

    background-color: #949494;
    padding: 3px 10px;
    border-radius: 20px;
    font-weight: 600;

    a {
      color: white;
    }
  }

  p {
    font-weight: 600;
    font-size: 18px;
    display: flex;
  }
`;
