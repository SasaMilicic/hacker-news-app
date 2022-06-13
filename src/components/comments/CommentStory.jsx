import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as BackButton } from '../../assets/svg/icons/arrow-left-square.svg';
import { convertTime } from './../../utils/utils-components';

function CommentStory({ story: { title, time, url } }) {
  return (
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
  );
}

export default CommentStory;
