export const BASE_URL = 'https://hacker-news.firebaseio.com/v0';
export const STORIES_ID_URL = `${BASE_URL}/topstories.json`;
export const ITEM_URL = (itemID) => `${BASE_URL}/item/${itemID}.json`;

export const getItem = (actFetch) => (itemId, loading) => async (dispatch) => {
  loading(true);
  const fetchItem = await fetch(ITEM_URL(itemId));

  if (!fetchItem.ok) {
    dispatch(actFetch({ id: itemId }));
    loading(false);
    return;
  }

  const responseItem = await fetchItem.json();

  if (!responseItem) {
    dispatch(actFetch({ id: itemId }));
    loading(false);
    return;
  }

  dispatch(actFetch(responseItem));
  loading(false);
};
