import React from 'react';
import { useSelector } from 'react-redux';
import StoriesArticles from '../components/stories/StoriesArticles';
import StoriesButtons from '../components/stories/StoriesButtons';
import { selectStoryRequest } from '../state/selectors';
import { StyleStoriesPage } from './style-pages';

function StoriesPage() {
  const storiesState = useSelector((state) => state.stories);
  const isLoadingStories = selectStoryRequest(storiesState);

  return (
    <StyleStoriesPage isLoading={isLoadingStories}>
      <StoriesArticles />
      {!isLoadingStories && <StoriesButtons />}
    </StyleStoriesPage>
  );
}

export default StoriesPage;
