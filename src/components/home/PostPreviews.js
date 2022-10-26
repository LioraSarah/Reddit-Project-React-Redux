import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  loadAllPreviews,
  selectFilteredAllPreviews,
  isLoading
} from '../../features/posts/postPreviewsSlice';
import { selectFilter } from '../../features/filter/filterSlice'
import PostListItem from '../../components/home/postListItem/PostListItem';
import "./PostPreviews.css";
import { useParams } from 'react-router-dom';
import { selectSearchTerm } from '../../features/search/searchSlice';

const PostPreviews = () => {
  let { subreddit } = useParams();
  subreddit = "r/" + subreddit;
  const dispatch = useDispatch();
  const postPreviews = useSelector(selectFilteredAllPreviews);
  const newFilter = useSelector(selectFilter);
  const searchTerm = useSelector(selectSearchTerm);
  const isLoadingPreviews = useSelector(isLoading);
  if (!subreddit) {
    subreddit = "r/popular";
  };
  console.log(subreddit);
  
  useEffect(() => {
    dispatch(loadAllPreviews({subreddit: subreddit, filter: newFilter}));
    console.log(newFilter + " in UseEffect");
  }, [dispatch, newFilter, subreddit, searchTerm]);

  console.log(isLoadingPreviews);
  console.log(postPreviews);

  if (isLoadingPreviews) {
    return (<div id="loading-container">
        <p id="loading">loading posts...</p>
      </div>);
  }

  return (
    <>
      <section className='posts-container'>
        {postPreviews.map((post) => (
          <div key={post.id}>
            <PostListItem post={post} />
          </div>
        ))}
      </section>
    </>
  );
};

export default PostPreviews;
