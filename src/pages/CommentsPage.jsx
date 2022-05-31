import React from 'react';
import { useSelector } from 'react-redux';
import CommentsList from '../components/comments/CommentsList';
import { selectCommRequest } from '../state/selectors';
import { StyCommentsPage } from './style-pages';

function CommentsPage() {
  const commentsState = useSelector((state) => state.comments);
  const isLoadingComments = selectCommRequest(commentsState);

  return (
    <StyCommentsPage isLoadingComments={isLoadingComments}>
      <CommentsList />
    </StyCommentsPage>
  );
}

export default CommentsPage;
