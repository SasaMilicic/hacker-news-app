import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getComments } from '../../state/fetch/fetch-fun';

function Comments() {
  const dispatch = useDispatch();
  const { id } = useParams();

  const commentsState = useSelector((state) => state.comments);
  const story = commentsState.storyData;
  const { title } = story;
  console.log(story);
  console.log(title);

  useEffect(() => {
    dispatch(getComments(id));
  }, [id]);

  return (
    <div>
      <h1>{title}</h1>
    </div>
  );
}

export default Comments;
