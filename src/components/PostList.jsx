import React from 'react';
import Post from './Post';

function PostList(props) {
  return (
    <div>
      <div>
        <style>{`
          .post {
            font-size: 18px;
            color: rgb(164,19,0);
            text-align: center;
            -webkit-animation: glow 1s ease-in-out infinite alternate;
            -moz-animation: glow 1s ease-in-out infinite alternate;
            animation: glow 1s ease-in-out infinite alternate;
          }

          @-webkit-keyframes glow {
            from {
              text-shadow: 0 0 10px rgb(0,240,255), 0 0 20px rgb(0,240,255), 0 0 30px #e60073, 0 0 40px #e60073, 0 0 50px #e60073, 0 0 60px #e60073, 0 0 70px #e60073;
            }
            to {
              text-shadow: 0 0 20px rgb(0,240,255), 0 0 30px #ff4da6, 0 0 40px #ff4da6, 0 0 50px #ff4da6, 0 0 60px #ff4da6, 0 0 70px #ff4da6, 0 0 80px #ff4da6;
            }
          }
        `}</style>
      </div>
      <div className='post'>
        {props.postList.map((post) => 
          <Post
          onRemovePost={props.onRemovePost}
          title={post.title}
          link={post.link}
          body={post.body}
          postId = {post.id}
          key={post.id}
          />
          )}
      </div>
    </div>
  );
}

export default PostList;