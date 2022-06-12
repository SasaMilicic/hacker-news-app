// import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { selectStory } from '../../state/selectors';
import { StyComments } from './style-comments';
import CommentStory from './CommentStory';

function CommentsList() {
  const { id } = useParams();
  const story = useSelector((state) => selectStory(state, Number(id)));

  return (
    <StyComments>
      <CommentStory story={story} />
    </StyComments>
  );
}

export default CommentsList;

//  <StyComments>
// {isLoadingComments ? (
//   <LoadingPage />
// ) : (
//   <>
//     <CommentStory />

//     {comments.map((comment) => {
//       return isContainesJustId(comment) ? (
//         <StyCommentError key={comment.id}>
//           <h3>
//             {errorCommentsMessage} id:'{id}'
//           </h3>
//         </StyCommentError>
//       ) : (
//         <Comment key={comment.id} comment={comment} />
//       );
//     })}
//   </>
// )}
// </StyComments>
