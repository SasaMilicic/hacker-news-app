import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getComments } from '../../state/fetch/fetch-fun';
import { StyComments, StyComment, StyReply } from './style-comments';
import { ReactComponent as BackButton } from '../svg/arrow-left-square.svg';
import { Link } from 'react-router-dom';

function CommentsList() {
  const [activeButton, setActiveButton] = useState(false);
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
  const toggleButton = () => setActiveButton(!activeButton);

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

      {comments.map(({ id, by, text, time, type, kids }) => (
        <StyComment key={id}>
          <h3>
            {type} by: {by}
            <span>{convertTime(time)}</span>
          </h3>
          <div>
            {text && text.length > 500 ? (
              <p>
                <span dangerouslySetInnerHTML={{ __html: text }} />

                {activeButton && (
                  <button onClick={toggleButton}> M O R E </button>
                )}
                {!activeButton && (
                  <button onClick={toggleButton}> L E S S</button>
                )}
              </p>
            ) : (
              <p dangerouslySetInnerHTML={{ __html: text }} />
            )}
          </div>
          <StyReply>Reply: {kids === undefined ? 0 : kids.length}</StyReply>
        </StyComment>
      ))}
    </StyComments>
  );
}

export default CommentsList;
