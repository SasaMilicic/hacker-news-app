export const BASE_URL = 'https://hacker-news.firebaseio.com/v0';
export const STORIES_ID_URL = `${BASE_URL}/topstories.json`;
export const ITEM_URL = (itemID) => `${BASE_URL}/item/${itemID}.json`;

export const isNotDataAvilable = (items) => {
  return items.length === 0 || items.every((story) => !story);
};

export const isNotAllElementsAvilable = (items) =>
  items.some((story) => !story);

export const getFilteredElements = (stories, storiesIds) => {
  const filteredStories = stories.map((item, indexStory) => {
    if (!item) {
      return {
        id: storiesIds.filter((el, indexErr) => indexErr === indexStory)[0],
      };
    }
    return item;
  });

  return filteredStories;
};

export const getItem = (id, loading, actFetch) => async (dispatch) => {
  loading(true);
  const fetchItem = await fetch(ITEM_URL(id));

  if (!fetchItem.ok) {
    dispatch(actFetch(id));
    loading(false);
    return;
  }

  const responseItem = await fetchItem.json();
  dispatch(actFetch(responseItem));
  loading(false);
};
