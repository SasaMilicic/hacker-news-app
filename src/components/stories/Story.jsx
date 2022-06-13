import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getStories } from '../../state/reducers/reducer-stories';
import LoadingPage from './../loading/LoadingPage';
import { selectStory } from '../../state/selectors';
import { calcOrdinalNumber } from './../../state/selectors';
import styled from 'styled-components';
import StoryHeadline from './StoryHeadline';
import StoryCommentBox from './StoryCommentBox';

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

  return (
    <StyleStory>
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
`;

// const StyError = styled.div`
//   display: flex;
//   flex-direction: column;
//   color: red;
//   h4 {
//     font-style: italic;
//   }
// `;
