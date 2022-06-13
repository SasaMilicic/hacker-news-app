import React from 'react';
import CommentsList from '../components/comments/CommentsList';
import styled from 'styled-components';

function CommentsPage() {
  return (
    <StyCommentsPage>
      <CommentsList />
    </StyCommentsPage>
  );
}

export default CommentsPage;

const setBackgroundColor = (isLoad) => {
  return (
    !isLoad &&
    `background: #e6e6e6;
  color: black;`
  );
};
const StyCommentsPage = styled.div`
  text-align: justify;
  padding: 20px;
  border-radius: 20px;

  ${(props) => setBackgroundColor(props.isLoadingComments)}
`;
