import React from 'react';
import StoriesList from '../components/stories/StoriesList';
import { StyleStoriesPage } from './style-pages';
import StoriesButtons from './../components/stories/StoriesButtons';
import { useSelector } from 'react-redux';
import { checkStoriesFilled } from './../state/selectors';

function StoriesPage() {
  const isStoriesFulfilled = useSelector(checkStoriesFilled);

  return (
    <StyleStoriesPage /* isLoading={isLoadingStories} */>
      <StoriesList />

      {isStoriesFulfilled && <StoriesButtons />}
    </StyleStoriesPage>
  );
}

export default StoriesPage;
