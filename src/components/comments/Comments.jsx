import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getComments } from '../../state/fetch/fetch-fun';
import { StyComments, StyComment, StyReply } from './style-comments';
import { ReactComponent as BackButton } from '../svg/arrow-left-square.svg';
import { Link } from 'react-router-dom';

function Comments() {
  const dispatch = useDispatch();
  const { id } = useParams();

  const commentsState = useSelector((state) => state.comments);
  const story = commentsState.storyData;
  const comments = commentsState.commentsData;
  const { title, time, url } = story;

  useEffect(() => {
    dispatch(getComments(id));
  }, [id]);

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
          {time}
        </h2>
      </div>

      {comments.map(({ id, by, text, time, type, kids }) => (
        <StyComment key={id}>
          <h3>
            {type} by: {by} <span> {time} </span>
          </h3>
          <p dangerouslySetInnerHTML={{ __html: text }} />

          <StyReply>Reply: {kids === undefined ? 0 : kids.length}</StyReply>
        </StyComment>
      ))}
    </StyComments>
  );
}

export default Comments;

// <a target="_blank" rel="noreferrer" href={url}>
// {ordinalNumber++}) <span>{title}</span>
// </a>
