import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getItem } from './../../state/reducers/stories-reducer';
import LoadingPage from './../loading/LoadingPage';
import { StyHeadline, StyCommentBox } from './style-stories';
import { selectStory } from '../../state/selectors';
import { convertTime } from './../../utils/utils-components';
import { calcOrdinalNumber } from './../../state/selectors';
import { Link } from 'react-router-dom';
import { ReactComponent as ScoreIcon } from '../../assets/svg/icons/hand-thumbs-up-fill.svg';

function Story({ storyId }) {
  const [isLoading, setIsLoading] = useState(true);
  const story = useSelector((state) => selectStory(state, storyId));

  const ordinalNumber = useSelector((state) => {
    return calcOrdinalNumber(state, storyId);
  });

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getItem(storyId, setIsLoading));
  }, [storyId]);

  if (isLoading) {
    return (
      <div>
        <LoadingPage size={70} />
      </div>
    );
  } else {
    const { by, time, title, kids, score, id } = story;
    return (
      <div>
        <StyHeadline>
          <h4>
            <div>author: {by}</div>
            <div>{convertTime(time)}</div>
          </h4>
          <h2>
            <a target="_blank" rel="noreferrer" href={story.url}>
              {ordinalNumber}) <span>{title}</span>
            </a>
          </h2>
        </StyHeadline>

        <StyCommentBox>
          {kids === undefined ? (
            <button className="off-button"> 0 comments </button>
          ) : (
            <button>
              <Link to={'/comments/' + id}>{kids.length} comments</Link>
            </button>
          )}
          <p>
            | <ScoreIcon /> {score}
          </p>
        </StyCommentBox>
      </div>
    );
  }
}

export default Story;
