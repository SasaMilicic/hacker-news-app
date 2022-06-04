import React, { useEffect } from 'react';
import { StyComments, StyCommentError } from './style-comments';
import Comment from './Comment';
import LoadingPage from '../LoadingPage';
import CommentStory from './CommentStory';
import { getComments } from '../../state/fetch/fetch-fun';
import { selectComments, selectCommRequest } from './../../state/selectors';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

function CommentsList() {
  const commentsState = useSelector((state) => state.comments);
  const dispatch = useDispatch();
  const { id } = useParams();

  const isLoadingComments = selectCommRequest(commentsState);
  const comments = selectComments(commentsState);

  useEffect(() => {
    dispatch(getComments(id));
  }, [id]);

  const isCommentsEmpty = (element) => {
    const { id, ...storyElements } = element;
    return Object.keys(storyElements).length === 0;
  };

  const errorMessage = useSelector((state) => state.comments.error);
  console.log(errorMessage);

  return (
    <StyComments>
      {isLoadingComments ? (
        <LoadingPage />
      ) : errorMessage ? (
        <h1>error</h1>
      ) : (
        <>
          <CommentStory />

          {comments.map((comment) => {
            return isCommentsEmpty(comment) ? (
              <StyCommentError key={comment.id}>
                <h3>
                  {commentsState.error} id:'{id}'
                </h3>
              </StyCommentError>
            ) : (
              <Comment key={comment.id} comment={comment} />
            );
          })}
        </>
      )}
    </StyComments>
  );
}

export default CommentsList;
