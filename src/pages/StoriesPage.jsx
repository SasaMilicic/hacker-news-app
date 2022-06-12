import React from 'react';
import { useSelector } from 'react-redux';
import StoriesList from '../components/stories/StoriesList';
import { StyleStoriesPage } from './style-pages';
import StoriesButtons from '../components/stories/StoriesButtons';

// import { selectStoryRequest } from '../state/selectors';

function StoriesPage() {
  // const isLoadingStories = useSelector(selectStoryRequest);

  return (
    <StyleStoriesPage /* isLoading={isLoadingStories} */>
      <StoriesList />
      {/* {!isLoadingStories && <StoriesButtons />} */}
      <StoriesButtons />
    </StyleStoriesPage>
  );
}

export default StoriesPage;
