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
            border: 2px solid black;
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
