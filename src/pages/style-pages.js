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
