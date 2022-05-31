import styled from 'styled-components';

const setBackgroundColor = (isLoad) => {
  return (
    !isLoad &&
    `background: #e6e6e6;
  color: black;`
  );
};

export const StyCommentsPage = styled.div`
  text-align: justify;
  padding: 20px;
  border-radius: 20px;

  ${(props) => setBackgroundColor(props.isLoadingComments)}
`;

export const StyleStoriesPage = styled.main`
  text-align: left;
  color: black;
  padding: 5px;

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
