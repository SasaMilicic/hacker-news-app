import { StyComment, StyReply } from './style-comments';

function Comment({ comment }) {
  const { by, type, time, text, kids } = comment;

  const convertTime = (time) => new Date(time).toUTCString().slice(5, 22);

  return (
    <StyComment>
      <h3>
        {type} by: {by}
        <span>{convertTime(time)}</span>
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
      <StyReply>Reply: {kids === undefined ? 0 : kids.length}</StyReply>
    </StyComment>
  );
}

export default Comment;
