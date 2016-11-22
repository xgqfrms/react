class Comment extends React.Component {
  render() {
    return(
      <div className="comment">
        <p className="comment-header">
          Anne Droid
        </p>
        <p className="comment-body">
          I wanna know what love is...
        </p>
        <div className="comment-actions">
          <a href="#">Delete comment</a>
        </div>
      </div>
    );
  }
}
