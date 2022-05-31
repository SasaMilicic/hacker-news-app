import React, { useEffect } from 'react';
import Comment from './Comment';
import Loading from '../Loading';
import { ReactComponent as BackButton } from '../svg/arrow-left-square.svg';
import { StyComments } from './style-comments';
import { Link } from 'react-router-dom';
import { getComments } from '../../state/fetch/fetch-fun';
import {
  convertTime,
  selectCommentStory,
  selectComments,
  selectCommRequest,
} from './../../state/selectors';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

function CommentsList() {
  const commentsState = useSelector((state) => state.comments);
  const dispatch = useDispatch();
  const { id } = useParams();

  const { title, time, url } = selectCommentStory(commentsState);
  const isLoadingComments = selectCommRequest(commentsState);
  const comments = selectComments(commentsState);

  useEffect(() => {
    dispatch(getComments(id));
  }, [id]);

  return (
    <StyComments>
      {isLoadingComments ? (
        <Loading />
      ) : (
        <>
          <div>
            <h2>
              <span>
                <Link to="/stories">
                  <BackButton />
                </Link>
                <a target="_blank" rel="noreferrer" href={url}>
                  title: '{title}'
                </a>
              </span>
              {convertTime(time)}
            </h2>
          </div>

          {comments.map((comment) => (
            <Comment key={comment.id} comment={comment} />
          ))}
        </>
      )}
    </StyComments>
  );
}

export default CommentsList;
