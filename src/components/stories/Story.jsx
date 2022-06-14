import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import LoadingPage from './../loading/LoadingPage';
import { selectStory } from '../../state/selectors';
import { calcOrdinalNumber } from './../../state/selectors';
import styled from 'styled-components';
import StoryHeadline from './StoryHeadline';
import StoryCommentBox from './StoryCommentBox';
import { actRestartStoriesState } from './../../state/reducers/reducer-stories';
import { getStory } from '../../api/api';

function Story({ storyId }) {
  const [isLoading, setIsLoading] = useState(true);
  const story = useSelector((state) => selectStory(state, storyId));

  const ordinalNumber = useSelector((state) => {
    return calcOrdinalNumber(state, storyId);
  });

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getStory(storyId, setIsLoading));

    return () => {
      dispatch(actRestartStoriesState());
    };
  }, [storyId]);

  return (
    <StyleStory isLoading={isLoading}>
      {isLoading ? (
        <LoadingPage size={70} />
      ) : (
        <>
          <StoryHeadline story={story} ordinalNumber={ordinalNumber} />
          <StoryCommentBox story={story} />
        </>
      )}
    </StyleStory>
  );
}

export default Story;

const StyleStory = styled.div`
  border-bottom: 2px solid black;
  padding: ${({ isLoading }) => isLoading && '10px 0px'};
`;

// const StyError = styled.div`
//   display: flex;
//   flex-direction: column;
//   color: red;
//   h4 {
//     font-style: italic;
//   }
// `;
