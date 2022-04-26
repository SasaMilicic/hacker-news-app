import * as S from './style-story-page.js';
import { useSelector } from 'react-redux';

function MainStoryPage() {
  // const {
  //   by: author,
  //   url: toUrl,
  //   title,
  //   kids: comments,
  //   score,
  // } = useSelector(state => state.topStory);

  return (
    <S.Main>
      {/*     <S.Headline>
        <h4> author: {author} </h4>
        <h2>
          <a target="_blank" rel="noreferrer" href={toUrl}>
            {title}
          </a>
        </h2>
      </S.Headline>
      <div>
        <h3>
          {comments.length} comments | score: {score}
        </h3>
      </div> */}
    </S.Main>
  );
}

export default MainStoryPage;
