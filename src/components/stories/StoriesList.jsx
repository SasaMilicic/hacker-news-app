import React from 'react';
import { useSelector } from 'react-redux';
import { selectStoriesIds } from './../../state/selectors';
import Story from './Story';

function StoriesList() {
  const storiesIds = useSelector(selectStoriesIds);

  return (
    <div>
      {storiesIds.map((id) => (
        <Story key={id} storyId={id} />
      ))}
    </div>
  );
}

export default StoriesList;
