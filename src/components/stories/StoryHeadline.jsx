import React from 'react';
import styled from 'styled-components';
import { convertTime } from './../../utils/utils-components';

function StoryHeadline({ story, ordinalNumber }) {
  const { by, time, title, url } = story;

  return (
    <StyleHeadline>
      <h4>
        <div>author: {by}</div>
        <div>{convertTime(time)}</div>
      </h4>
      <h2>
        <a target="_blank" rel="noreferrer" href={url}>
          {ordinalNumber}) <span>{title}</span>
        </a>
      </h2>
    </StyleHeadline>
  );
}

export default StoryHeadline;

const StyleHeadline = styled.div`
  display: flex;
  flex-direction: column;
  h4 {
    display: flex;
    text-align: center;
    justify-content: space-between;
    font-style: italic;
  }
`;
