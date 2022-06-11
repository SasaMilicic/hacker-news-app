import React from 'react';
import { useSelector } from 'react-redux';
import StoriesList from '../components/stories/StoriesList';

// import StoriesButtons from '../components/stories/StoriesButtons';
import { selectStoryRequest } from '../state/selectors';
import { StyleStoriesPage } from './style-pages';

function StoriesPage() {
  const isLoadingStories = useSelector(selectStoryRequest);

  return (
    <StyleStoriesPage isLoading={isLoadingStories}>
      <StoriesList />
      {/* {!isLoadingStories && <StoriesButtons />} */}
    </StyleStoriesPage>
  );
}

export default StoriesPage;
