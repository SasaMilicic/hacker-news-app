const initialState_fake = {
  by: 'zigor',
  descendants: 56,
  id: 31084264,
  kids: [
    31084744, 31084889, 31085435, 31084874, 31087913, 31085149, 31087314,
    31085705,
  ],
  score: 60,
  time: 1650381305,
  title: 'Ajax Battle: XMLHttpRequest vs. the Fetch API',
  type: 'story',
  url: 'https://blog.openreplay.com/ajax-battle-xmlhttprequest-vs-the-fetch-api/',
};

const topStoryReducer = (state = initialState_fake) => {
  return state;
};

export default topStoryReducer;
