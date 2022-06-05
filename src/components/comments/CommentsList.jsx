import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { StyComments, StyCommentError } from './style-comments';
import Comment from './Comment';
import LoadingPage from '../loading/LoadingPage';
import CommentStory from './CommentStory';
import { getComments } from './../../api/api-comments';
import { isContainesJustId } from '../../utils/utils-components';
import {
  selectComments,
  selectCommRequest,
  selectErrorComments,
} from './../../state/selectors';

function CommentsList() {
  const dispatch = useDispatch();
  const { id } = useParams();

  const errorCommentsMessage = useSelector(selectErrorComments);
  const isLoadingComments = useSelector(selectCommRequest);
  const comments = useSelector(selectComments);

  useEffect(() => {
    dispatch(getComments(id));
  }, [id]);

  return (
    <StyComments>
      {isLoadingComments ? (
        <LoadingPage />
      ) : (
        <>
          <CommentStory />

          {comments.map((comment) => {
            return isContainesJustId(comment) ? (
              <StyCommentError key={comment.id}>
                <h3>
                  {errorCommentsMessage} id:'{id}'
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
