import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { ITEM_URL } from '../../state/fetch/fetch-fun';

function Comments() {
  const { id } = useParams();

  console.log(id);

  const getComment = async (commId) => {
    const api = await fetch(ITEM_URL(commId));
    const comment = await api.json();
    console.log(comment);
  };

  useEffect(() => {
    getComment(id);
  }, [id]);

  return <div>Comments</div>;
}

export default Comments;
