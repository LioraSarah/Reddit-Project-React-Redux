import React from 'react';
import "./PostListItem.css";
import ReactReadMoreReadLess from "react-read-more-read-less";

export default function PostListItem({ post }) {

  let image = <></>;
  const videoURL = post.url;
  if (post.is_gallery) {
    image = <img src={post.thumbnail} alt='' className='post-image' />
  } else if (post.post_hint === "image") {
    image = <img src={post.url} alt='' className='post-image' />;
  }
  
  let selfText = <></>;
  if (post.selftext) {
    selfText = <ReactReadMoreReadLess
    charLimit={200}
    readMoreText={" Read more ▼"}
    readLessText={" Read less ▲"}>
      {post.selftext}
    </ReactReadMoreReadLess>
  }

// } else {
//   const postURL = post.url;
//   <a href={postURL} target="_blank" rel='noreferrer'>View original content</a>
// }
  
  const redditUtcSeconds = post.created_utc;
  let date = new Date(0); // The 0 there is the key, which sets the date to the epoch
  date.setUTCSeconds(redditUtcSeconds);

  return (
    <button key={post.id} className='post-container'>
      <div className='author-container'>
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
        {/* <div className='comments' onClick={}>
          <h4>View {post.num_comments} comments</h4>
        </div> */}
      </div>
    </button>
  );
}
