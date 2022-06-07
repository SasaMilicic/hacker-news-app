import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { ReactComponent as BackButton } from '../../assets/svg/icons/arrow-left-square.svg';
import { selectCommentStory } from './../../state/selectors';
import { actRestartState } from '../../state/reducers/reply-reducer';
import { convertTime } from './../../utils/utils-components';

function CommentStory() {
  const dispatch = useDispatch();
  const { title, time, url } = useSelector(selectCommentStory);

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
