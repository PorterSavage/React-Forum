import React from 'react';
import Post from './Post';

let postList = [
  {
    title: "This Is the first post!",
    link: "This Is the first link!",
    body: "This Is the first body!"
  },
  {
    title: "This Is the second post!",
    link: "This Is the second link!",
    body: "This Is the second body!"
  },
  {
    title: "This Is the third post!",
    link: "This Is the third link!",
    body: "This Is the third body!"
  }
]

function PostList() {
  return (
    <div>
      <div>
        <style>{`

        `}</style>
      </div>
      <div>
        {postList.map((post, index) => (
          <Post title={post.title}
          link={post.link}
          body={post.body}
          key={index}/>
          ))}
      </div>
    </div>
  );
}

export default PostList;