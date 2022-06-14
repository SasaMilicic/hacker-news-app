import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import CommentStory from './CommentStory';
import Comment from './Comment';
import { selectCommentsStory } from './../../state/selectors';
import LoadingPage from './../loading/LoadingPage';
import { actRestartCommentState } from './../../state/reducers/reducer-comments';
import { getCommentStory } from './../../api/api-elements';
import styled from 'styled-components';

function CommentsList() {
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useDispatch();
  const { id } = useParams();

  const story = useSelector(selectCommentsStory);

  useEffect(() => {
    dispatch(getCommentStory(id, setIsLoading));

    return () => {
      dispatch(actRestartCommentState());
    };
  }, []);

  return (
    <StyleComments>
      {isLoading ? (
        <LoadingPage />
      ) : (
        <>
          <CommentStory story={story} />

          {story.kids.map((commentId) => (
            <Comment key={commentId} commentId={commentId} />
          ))}
        </>
      )}
    </StyleComments>
  );
}

export default CommentsList;

export const StyleComments = styled.div`
  h2 {
    border-bottom: 2px solid black;
    padding: 5px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    a {
      color: black;
      display: flex;
      text-decoration: none;
    }

    span {
      display: flex;
      align-items: center;
      gap: 5px;
      margin-right: 10px;
    }
  }
`;
