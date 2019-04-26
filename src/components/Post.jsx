import React from 'react';
import PropTypes from 'prop-types';

function Post(props) {
  return (
    <div>
      <div>
        <style>{`
          .postDiv {
            border: 1px solid black;
            margin-top: 20px;
            margin-right: 900px;
            margin-left: 20px;
            display: grid;
            grid-template-columns: 1fr;
          }
        `}</style>
      </div>
      <div className="postDiv">
        <h2>{props.title}</h2>
        <p>{props.link}</p>
        <p><em>{props.body}</em></p>
      </div>
    </div>
  );
}

Post.propTypes = {
  title: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired
}

export default Post;