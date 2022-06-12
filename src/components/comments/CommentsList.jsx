import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { selectStory } from '../../state/selectors';
import { StyComments } from './style-comments';
import CommentStory from './CommentStory';
import Comment from './Comment';

function CommentsList() {
  const { id } = useParams();
  const {
    title,
    time,
    url,
    kids: commentsIds,
  } = useSelector((state) => selectStory(state, Number(id)));

  return (
    <StyComments>
      <CommentStory title={title} time={time} url={url} />

      {commentsIds.map((commentId) => (
        <Comment key={commentId} commentId={commentId} />
      ))}
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
