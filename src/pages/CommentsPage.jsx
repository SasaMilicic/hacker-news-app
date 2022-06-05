import React from 'react';
import { useSelector } from 'react-redux';
import CommentsList from '../components/comments/CommentsList';
import { selectCommRequest } from '../state/selectors';
import { StyCommentsPage } from './style-pages';

function CommentsPage() {
  const isLoadingComments = useSelector(selectCommRequest);

  return (
    <StyCommentsPage isLoadingComments={isLoadingComments}>
      <CommentsList />
    </StyCommentsPage>
  );
}

export default CommentsPage;
