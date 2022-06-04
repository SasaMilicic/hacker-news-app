import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { ReactComponent as BackButton } from '../svg/arrow-left-square.svg';
import { convertTime, selectCommentStory } from './../../state/selectors';
import { actRestartState } from '../../state/reducers-actions';

function CommentStory() {
  const dispatch = useDispatch();
  const commentsState = useSelector((state) => state.comments);
  const { title, time, url } = selectCommentStory(commentsState);

  return (
    <div>
      <h2>
        <span>
          <Link onClick={dispatch(actRestartState)} to="/stories">
            <BackButton />
          </Link>
          <a target="_blank" rel="noreferrer" href={url}>
            title: '{title}'
          </a>
        </span>
        {convertTime(time)}
      </h2>
    </div>
  );
}

export default CommentStory;
