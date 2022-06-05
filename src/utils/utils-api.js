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

export const getItem = async (id) => {
  const fetchArticle = await fetch(ITEM_URL(id));
  if (!fetchArticle.ok) return;

  return await fetchArticle.json();
};

export const getItems = (itemIds) => {
  const itemPromises = itemIds.map(getItem);

  return Promise.all(itemPromises);
};
