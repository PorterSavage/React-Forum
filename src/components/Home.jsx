import React from 'react';
import PostList from './PostList';
import Rules from './Rules';

function Home() {
  return (
    <div>
      <div>
        <style>{`
          .posts {
            margin-top: 75px;           
          }
          .forumDiv {
            margin-top: 75px;
            text-align: center;
            font-family: sans-serif;
          }
        `}</style>
      </div>
      <div className="forumDiv">
        <h1>Forum</h1>
      </div>
      <div className="posts">
        <PostList/>
      </div>
      <div>
        <Rules/>
      </div>
    </div>
  );
}

export default Home;