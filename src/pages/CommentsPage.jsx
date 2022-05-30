import React from 'react';
import CommentsList from '../components/comments/CommentsList';
import CommentsButton from '../components/comments/CommentsButton';
import { StyCommentsPage } from './style-pages';

function CommentsPage() {
  return (
    <StyCommentsPage>
      <CommentsList />
      <CommentsButton />
    </StyCommentsPage>
  );
}

export default CommentsPage;
