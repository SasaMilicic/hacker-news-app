import { StMain, StHeadline, StCommDiv } from './StyleMain';

import BtnCloseComm from './ButtonComments/BtnCloseComm'; // Conditionaly
import BtnShowComm from './ButtonComments/BtnShowComm';

function Main() {
  return (
    <StMain>
      <StHeadline>
        <h4> author: azizsaya </h4>
        <h2>
          <a
            target="_blank"
            href="https://www.foodunfolded.com/article/why-are-some-egg-yolks-so-orange"
          >
            Why Are Some Egg Yolks So Orange?
          </a>
        </h2>
      </StHeadline>
      <div>
        <StCommDiv>
          <BtnShowComm /> {/* <BtnCloseComm />  **** Conditional**** */}
          <h3> 10 comments </h3>
        </StCommDiv>
        <h3> | score: 38 </h3>
      </div>
    </StMain>
  );
}

export default Main;

// value: {
//   by: 'azizsaya',
//   descendants: 18,
//   id: 31059524,
//   kids: [
//   31059895, 31059893, 31059865, 31059888, 31059892, 31059780, 31059807,
//   31059809, 31059730, 31059767,
//   ],
//   score: 38,
//   time: 1650185700,
//   title: 'Why Are Some Egg Yolks So Orange?',
//   type: 'story’
//   url: 'https://www.foodunfolded.com/article/why-are-some-egg-yolks-so-orange',
//   },
