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
            margin-right: 20px;
            margin-left: 20px;
            padding-left: 8px;
            font-family: sans-serif;
            background-image: url("https://66.media.tumblr.com/f363bc2f0d655d3505dbb16dae0119e2/tumblr_ogli3pzLfd1smiv11o1_400.png");
            background-image: cover;
            background-position: bottom;
            background-repeat: no-repeat;
            background-size: 800px 150px;
            opacity: 0.6;
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