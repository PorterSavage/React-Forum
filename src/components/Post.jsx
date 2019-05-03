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
              opacity: 0.8;
            }

            #vote {
              background: #eb94d0;
              background-image: -webkit-linear-gradient(top, #eb94d0, #2079b0);
              background-image: -moz-linear-gradient(top, #eb94d0, #2079b0);
              background-image: -ms-linear-gradient(top, #eb94d0, #2079b0);
              background-image: -o-linear-gradient(top, #eb94d0, #2079b0);
              background-image: linear-gradient(to bottom, #eb94d0, #2079b0);
              -webkit-border-radius: 28;
              -moz-border-radius: 28;
              border-radius: 20px;
              text-shadow: 3px 2px 1px #9daef5;
              -webkit-box-shadow: 6px 5px 24px #666666;
              -moz-box-shadow: 6px 5px 24px #666666;
              box-shadow: 6px 5px 24px #666666;
              font-family: sans-serif;
              color: #fafafa;
              font-size: 10px;
              padding: 8px;
              text-decoration: none;
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
          <button id='vote' className='button' onClick={e => this.upVote(e)}>Up-Vote</button>
          <button id='vote' className='button' onClick={e => this.downVote(e)}>Down-Vote</button>
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
