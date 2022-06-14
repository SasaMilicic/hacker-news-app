import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import LoadingPage from './../loading/LoadingPage';
import styled from 'styled-components';
import { selectComment } from './../../state/selectors';
import { convertTime, isContainesJustId } from './../../utils/utils-components';
import Replies from './../replies/Replies';
import { getComment } from './../../api/api';

function Comment({ commentId }) {
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useDispatch();

  const comment = useSelector((state) => selectComment(state, commentId));

  useEffect(() => {
    dispatch(getComment(commentId, setIsLoading));
  }, [commentId]);

  if (isLoading) {
    return (
      <div>
        <LoadingPage size={70} />
      </div>
    );
  } else {
    if (isContainesJustId(comment)) {
      return (
        <StyledComment>
          <div className="error">
            Sorry, comment with ID '{commentId}' isn't available!
          </div>
        </StyledComment>
      );
    }

    const { type, by, time, text, kids } = comment;
    return (
      <StyledComment>
        {comment.deleted ? (
          <h3 className="deleted">
            {type} deleted!
            <div>{convertTime(time)}</div>
          </h3>
        ) : (
          <>
            <h3>
              {type} by: {by}
              <div>{convertTime(time)}</div>
            </h3>
            <div>
              {text && text.length > 500 ? (
                <p>
                  <span
                    dangerouslySetInnerHTML={{
                      __html: text,
                    }}
                  />
                </p>
              ) : (
                <p dangerouslySetInnerHTML={{ __html: text }} />
              )}
            </div>
            <Replies repliesIds={kids} />
          </>
        )}
      </StyledComment>
    );
  }
}

export default Comment;

const StyledComment = styled.div`
  border-bottom: 2px solid black;
  padding: 5px;

  h3 {
    display: flex;
    align-items: center;
    justify-content: space-between;

    div {
      font-size: 15px;
      font-style: italic;
    }

    span {
      margin-left: 10px;
    }
  }

  .deleted {
    opacity: 0.4;
  }

  .error {
    color: red;
    font-weight: 900;
    opacity: 0.5;
  }
`;
