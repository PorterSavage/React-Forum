import React from 'react';
import PropTypes from 'prop-types';

function Post(props) {
  return (
    <div>
      <div>
        <style>{`

        `}</style>
      </div>
      <div>
        <h1>{props.title}</h1>
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