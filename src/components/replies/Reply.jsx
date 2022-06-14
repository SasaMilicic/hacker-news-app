import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import {
  actRemoveUnrenderedReply,
  actFetchReply,
} from './../../state/reducers/reducer-replies';
import { useDispatch, useSelector } from 'react-redux';
import LoadingReplies from './../loading/LoadingReplies';
import { selectReply } from './../../state/selectors';
import { convertTime, isContainesJustId } from './../../utils/utils-components';
import { getItem } from './../../utils/utils-api';

function Reply({ replyId }) {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);

  const reply = useSelector((state) => selectReply(state, replyId));

  useEffect(() => {
    dispatch(getItem(replyId, setLoading, actFetchReply));

    return () => {
      dispatch(actRemoveUnrenderedReply(replyId));
    };
  }, [replyId]);

  if (loading) {
    return (
      <StyledLoading>
        <div className="loading">
          <LoadingReplies />
        </div>
      </StyledLoading>
    );
  } else {
    if (isContainesJustId(reply)) {
      return (
        <StyledReply>
          <div className="error">
            Sorry, reply with ID '{replyId}' isn't available!
          </div>
        </StyledReply>
      );
    }

    const { time, text, by, deleted } = reply;
    return (
      <StyledReply>
        {deleted ? (
          <div className="deleted">
            <h5>Reply deleted!</h5>
          </div>
        ) : (
          <>
            <div>
              <h5>Reply by: {by}</h5>
              <h5 className="style-time">{convertTime(time)}</h5>
            </div>
            <p dangerouslySetInnerHTML={{ __html: text }} />
          </>
        )}
      </StyledReply>
    );
  }
}

export default Reply;

const StyledLoading = styled.div`
  margin-left: 10px;
  padding: 5px;
  background-color: #cfcfcf;
  border-radius: 10px;
  display: flex;
`;

const StyledReply = styled.div`
  margin-left: 10px;
  padding: 5px;
  background-color: #cfcfcf;
  border-radius: 10px;
  display: flex;
  flex-direction: column;

  div {
    width: 100%;
    display: flex;
    justify-content: space-between;
  }

  p {
    width: 100%;
    font-size: 14px;
  }

  .style-time {
    font-style: italic;
  }

  .deleted {
    opacity: 0.4;
  }

  .error {
    opacity: 0.4;
    color: red;
  }
`;
