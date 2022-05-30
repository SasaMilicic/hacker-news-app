import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getComments } from '../../state/fetch/fetch-fun';
import { StyComments } from './style-comments';
import { ReactComponent as BackButton } from '../svg/arrow-left-square.svg';
import { Link } from 'react-router-dom';
import Comment from './Comment';

function CommentsList() {
  const dispatch = useDispatch();
  const { id } = useParams();

  const commentsState = useSelector((state) => state.comments);
  const story = commentsState.storyData;
  const comments = commentsState.commentsData;
  const { title, time, url } = story;

  useEffect(() => {
    dispatch(getComments(id));
  }, [id]);

  const convertTime = (time) => new Date(time).toUTCString().slice(5, 22);

  return (
    <StyComments>
      <div>
        <h2>
          <span>
            <Link to="/stories">
              <BackButton />
            </Link>
            <a target="_blank" rel="noreferrer" href={url}>
              '{title}'
            </a>
          </span>
          {convertTime(time)}
        </h2>
      </div>

      {comments.map((comment) => (
        <Comment key={comment.id} comment={comment} />
      ))}
    </StyComments>
  );
}

export default CommentsList;
