import { ITEM_URL } from './../api/fetch-fun';

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
