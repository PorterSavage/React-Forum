import React from 'react';

function CreatePost() {
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
          }
          textarea {
            width: 400px;
            height: 250px;
          }
          button {
            border: 1px solid black;
            text-align: center;
          }
        `}</style>
      </div>
      <div className="center">
        <h1>Create Post</h1>
      </div>
      <div className="form">
        <label htmlFor="title">Title: </label>
        <input type="text"/>
        <br/>
        <label htmlFor="link">Link: </label>
        <input type="text"/>
        <br/>
        <label htmlFor="body">Body: </label>
        <textarea name="body"></textarea>
        <button>Post</button>
      </div>
    </div>
  );
}

export default CreatePost;