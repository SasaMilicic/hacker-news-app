import React from 'react';
import StoriesList from '../components/stories/StoriesList';
import StoriesButtons from './../components/stories/StoriesButtons';
import { useSelector } from 'react-redux';
import { checkStoriesFilled } from './../state/selectors';
import styled from 'styled-components';

function StoriesPage() {
  const isStoriesFulfilled = useSelector(checkStoriesFilled);

  return (
    <StyleStoriesPage>
      <StoriesList />

      {isStoriesFulfilled && <StoriesButtons />}
    </StyleStoriesPage>
  );
}

export default StoriesPage;

const setBackgroundColor = (isLoad) => {
  return (
    !isLoad &&
    `background: #e6e6e6;
  color: black;`
  );
};

const StyleStoriesPage = styled.main`
  text-align: left;
  color: black;
  padding: 10px;

  ${(props) => setBackgroundColor(props.isLoading)}

  a {
    color: black;
    text-decoration: none;
  }

  li {
    border-bottom: solid 2px black;
  }

  ul {
    padding: 10px;
    list-style-type: none;
  }

  h1 {
    text-align: center;
  }

  h4,
  h3,
  h2 {
    margin: 5px 0;
  }
  span {
    text-decoration: underline;
  }
`;
