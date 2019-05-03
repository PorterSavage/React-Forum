import React from 'react';
import PostList from './PostList';
import RulesControl from './RulesControl';

function Home(props) {
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
          h1 {
            opacity: 0.8;
            font-size: 30px;
            color: rgb(0,255,90);
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
      <div className="forumDiv">
        <h1>Forum</h1>
      </div>
      <div className="grid">
        <div className="posts">
          <PostList 
          postList = {props.postList} 
          onRemovePost = {props.onRemovePost}
          />
        </div>
        <div>
          <RulesControl/>
        </div>
      </div>
    </div>
  );
}




export default Home;