import React from 'react';
import v4 from 'uuid';

function CreatePost(props) {
  let title = null;
  let link = null;
  let body = null;

  function handleNewPostSubmission(e) {
    e.preventDefault();
    props.onAddPostToList({title: title.value, link: link.value, body: body.value, upvotes: 0, downvotes: 0, id: v4()})
    title.value = '';
    link.value = '';
    body.value = '';
  }

  return (
    <div>
      <div>
        <style>{`
          label {
            font-family: sans-serif;
          }
          .center {
            font-family: sans-serif;
            text-align: center;
            margin-top: 75px;
          }
          input, textarea {
            margin-top: 10px;
          }
          .form {
            text-align: center;
            border: 2px solid black;
            margin-right: 500px;
            margin-left: 500px;
            padding-top: 10px;
            padding-bottom: 10px;
            opacity: 0.6;
          }
          textarea {
            width: 400px;
            height: 250px;
          }
          #post {
            border: 1px solid black;
            margin-right: 8px;
            padding-left: 8px;
            background-color: orange;
            opacity: 0.8;
            background-image: url("https://66.media.tumblr.com/f363bc2f0d655d3505dbb16dae0119e2/tumblr_ogli3pzLfd1smiv11o1_400.png");
            background-image: cover;
            background-position: bottom;
            background-repeat: no-repeat;
            background-size: cover;
            font-size: 18px;
            color: white;
            text-align: center;
            -webkit-animation: glow 1s ease-in-out infinite alternate;
            -moz-animation: glow 1s ease-in-out infinite alternate;
            animation: glow 1s ease-in-out infinite alternate;
          }

          @-webkit-keyframes glow {
            from {
              text-shadow: 0 0 10px rgb(255,0,78), 0 0 20px rgb(255,0,78), 0 0 30px #e60073, 0 0 40px #e60073, 0 0 50px #e60073, 0 0 60px #e60073, 0 0 70px #e60073;
            }
            to {
              text-shadow: 0 0 20px rgb(255,0,78), 0 0 30px #ff4da6, 0 0 40px #ff4da6, 0 0 50px #ff4da6, 0 0 60px #ff4da6, 0 0 70px #ff4da6, 0 0 80px #ff4da6;
            }
          }
        `}</style>
      </div>
      <div className="center">
        <h1>Create Post</h1>
      </div>
      <div className="form">
        <form onSubmit={handleNewPostSubmission}>
          <label htmlFor="title">Title: </label>
          <input type="text"
          ref={(input) => {title = input;}} />
          <br/>
          <label htmlFor="link">Link: </label>
          <input type="text"
          ref={(input) => {link = input;}} />
          <br/>
          <label htmlFor="body">Body: </label>
          <textarea name="body"
          ref={(textarea) => {body = textarea;}}></textarea>
          <button id='post' type='submit'>Post</button>
          </form>
      </div>
    </div>
  );
} 

export default CreatePost;
