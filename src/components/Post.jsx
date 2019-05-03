import React from 'react';
import PropTypes from 'prop-types';

class Post extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      upVotes: 0,
      downVotes: 0
    }; 
  }

  upVote() {
    this.setState({ upVotes: this.state.upVotes + 1 });
  }

  downVote() {
    this.setState({ downVotes: this.state.downVotes + 1 });
  }

  render() {
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
              background-size: cover;
              opacity: 0.6;
            }
          `}</style>
        </div>
        <div className="postDiv">
          <h2>{this.props.title}</h2>
          <p>{this.props.link}</p>
          <p><em>{this.props.body}</em></p>
          <em>Up: {this.state.upVotes}</em> |
          <em>Down: {this.state.downVotes}</em>
          <br/>
          <button className='button' onClick={e => this.upVote(e)}>Up-Vote</button>
          <br/>
          <button className='button' onClick={e => this.downVote(e)}>Down-Vote</button>
        </div>
      </div>
    );
  }
}

Post.propTypes = {
  title: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired
}

export default Post;
