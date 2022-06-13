import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getStories } from '../../state/reducers/reducer-stories';
import LoadingPage from './../loading/LoadingPage';
import { selectStory } from '../../state/selectors';
import { convertTime } from './../../utils/utils-components';
import { calcOrdinalNumber } from './../../state/selectors';
import { Link } from 'react-router-dom';
import { ReactComponent as ScoreIcon } from '../../assets/svg/icons/hand-thumbs-up-fill.svg';
import styled from 'styled-components';

function Story({ storyId }) {
  const [isLoading, setIsLoading] = useState(true);
  const story = useSelector((state) => selectStory(state, storyId));

  const ordinalNumber = useSelector((state) => {
    return calcOrdinalNumber(state, storyId);
  });

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getStories(storyId, setIsLoading));
  }, [storyId]);

  if (isLoading) {
    return (
      <div>
        <LoadingPage size={70} />
      </div>
    );
  } else {
    const { by, time, title, kids, score, id } = story;
    return (
      <div>
        <StyleHeadline>
          <h4>
            <div>author: {by}</div>
            <div>{convertTime(time)}</div>
          </h4>
          <h2>
            <a target="_blank" rel="noreferrer" href={story.url}>
              {ordinalNumber}) <span>{title}</span>
            </a>
          </h2>
        </StyleHeadline>

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
      </div>
    );
  }
}

export default Story;

const StyleHeadline = styled.div`
  display: flex;
  flex-direction: column;
  h4 {
    display: flex;
    text-align: center;
    justify-content: space-between;
    font-style: italic;
  }
`;

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

// const StyError = styled.div`
//   display: flex;
//   flex-direction: column;
//   color: red;
//   h4 {
//     font-style: italic;
//   }
// `;
