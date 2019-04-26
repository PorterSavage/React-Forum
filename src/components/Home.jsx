import React from 'react';
import PostList from './PostList';

function Home() {
  return (
    <div>
      <div>
        <style>{`
          .posts {
            margin-top: 5%;          
          }
          .forumDiv {
            margin-top: 10%;
            text-align: center;
          }
        `}</style>
      </div>
      <div className="forumDiv">
        <h1>Forum</h1>
      </div>
      <div className="posts">
        <PostList/>
      </div>
    </div>
  );
}

export default Home;