import React from 'react';
import Post from './Post';

function PostList(props) {
  return (
    <div>
      <div>
        <style>{`

        `}</style>
      </div>
      <div>
        {props.postList.map((post) => 
          <Post
          title={post.title}
          link={post.link}
          body={post.body}
          key={post.id}
          />
          )}
      </div>
    </div>
  );
}

export default PostList;