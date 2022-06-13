import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { selectStory } from '../../state/selectors';
import { StyComments } from './style-comments';
import CommentStory from './CommentStory';
import Comment from './Comment';
import { actRestartCommentStata } from './../../state/reducers/reducer-comments';

function CommentsList() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const {
    title,
    time,
    url,
    kids: commentsIds,
  } = useSelector((state) => selectStory(state, Number(id)));

  useEffect(() => {
    return () => {
      dispatch(actRestartCommentStata());
    };
  }, []);

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
