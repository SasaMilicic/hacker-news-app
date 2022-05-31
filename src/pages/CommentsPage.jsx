import React from 'react';
import CommentsList from '../components/comments/CommentsList';
import { StyCommentsPage } from './style-pages';

function CommentsPage() {
  return (
    <StyCommentsPage>
      <CommentsList />
    </StyCommentsPage>
  );
}

export default CommentsPage;
