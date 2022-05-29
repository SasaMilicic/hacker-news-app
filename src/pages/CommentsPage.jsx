import React from 'react';
import Comments from '../components/comments/Comments';
import CommentsButton from '../components/comments/CommentsButton';

function CommentsPage() {
  return (
    <div>
      <h1> CommentsPage </h1>

      <Comments />
      <CommentsButton />
    </div>
  );
}

export default CommentsPage;
