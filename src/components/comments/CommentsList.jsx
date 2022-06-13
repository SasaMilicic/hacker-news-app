import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { StyComments } from './style-comments';
import CommentStory from './CommentStory';
import Comment from './Comment';
import { selectCommentsStory } from './../../state/selectors';
import LoadingPage from './../loading/LoadingPage';
import { getItem } from './../../utils/utils-api';
import { actRestartCommentState } from './../../state/reducers/reducer-comments';
import { actFetchCommentStory } from './../../state/reducers/reducer-comments';

function CommentsList() {
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useDispatch();
  const { id } = useParams();

  const story = useSelector(selectCommentsStory);

  useEffect(() => {
    dispatch(getItem(id, setIsLoading, actFetchCommentStory));

    return () => {
      dispatch(actRestartCommentState());
    };
  }, []);

  return (
    <StyComments>
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
    </StyComments>
  );
}

export default CommentsList;
