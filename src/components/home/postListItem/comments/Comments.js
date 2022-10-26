import React from 'react';

export default function PostListItem({ post }) {


  return (
    <button key={post.id} className='post-container'>
      {/* <div className='author-container'>
        <p className='post-author'><strong>{post.author}</strong> to {post.subreddit_name_prefixed}</p>
        <p className='date'>{date.toDateString()}</p>
      </div>
      <div className='post-content-container'>
        <h3 className='post-title'>{post.title}</h3>
        {selfText}
        {image}
        <a href={videoURL} target="_blank" rel='noreferrer' className='read-more'>View Reddit</a>
      </div>
      <div className='comments-container'>
        <Comments />
        {/* <div className='comments' onClick={}>
          <h4>View {post.num_comments} comments</h4>
        </div> */}
      </div> */}
    </button>
  );
}
