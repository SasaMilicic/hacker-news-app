// import React from 'react';
// import { useSelector } from 'react-redux';
// import { isContainesJustId, convertTime } from '../../utils/utils-components';
// import { selectErrorReplies } from './../../state/selectors';
// import { StyReply } from './style-comments';

// function Reply({ reply }) {
//   const { deleted, by, text, time, id } = reply;
//   const errRepliesMessage = useSelector(selectErrorReplies);

//   return (
//     <StyReply>
//       {isContainesJustId(reply) ? (
//         <div className="error">
//           <h5>
//             {errRepliesMessage} '{id}'
//           </h5>
//         </div>
//       ) : deleted ? (
//         <div className="deleted">
//           <h5>Reply deleted!</h5>
//         </div>
//       ) : (
//         <>
//           <div>
//             <h5>Reply by: {by}</h5>
//             <h5 className="style-time">{convertTime(time)}</h5>
//           </div>
//           <p dangerouslySetInnerHTML={{ __html: text }} />
//         </>
//       )}
//     </StyReply>
//   );
// }

// export default Reply;
