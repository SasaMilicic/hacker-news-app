import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getItem } from './../../state/reducers/stories-reducer';
import LoadingPage from './../loading/LoadingPage';
import { StyHeadline } from './style-stories';

function Story({ storyId }) {
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getItem(storyId, setLoading));
  }, [storyId]);

  // return <div> {loading ? <LoadingPage /> : <div> {storyId} </div>} </div>;
  return (
    <div>
      {loading ? (
        <LoadingPage size={70} />
      ) : (
        <StyHeadline> {storyId} </StyHeadline>
      )}
      {/* <LoadingPage size={70} /> */}
    </div>
  );
}

export default Story;

//Take select stories data on selectors that can take just one story.
//Try with map.
