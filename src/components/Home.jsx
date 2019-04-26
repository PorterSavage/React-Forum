import React from 'react';
import PostList from './PostList';
import RulesControl from './RulesControl';

function Home() {
  return (
    <div>
      <div>
        <style>{`
          .forumDiv {
            margin-top: 75px;
            text-align: center;
            font-family: sans-serif;
          }
          .grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
          }
        `}</style>
      </div>
      <div className="forumDiv">
        <h1>Forum</h1>
      </div>
      <div className="grid">
        <div className="posts">
          <PostList/>
        </div>
        <div>
          <RulesControl/>
        </div>
      </div>
    </div>
  );
}

export default Home;