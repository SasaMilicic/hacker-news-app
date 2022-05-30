import React from 'react';
import Comments from '../components/comments/Comments';
import CommentsButton from '../components/comments/CommentsButton';
import { StyCommentsPage } from './style-pages';

function CommentsPage() {
  return (
    <StyCommentsPage>
      <Comments />
      <CommentsButton />
    </StyCommentsPage>
  );
}

export default CommentsPage;
