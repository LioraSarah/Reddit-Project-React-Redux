import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadAllSubreddits, selectAllSubreddits, isLoading } from '../../features/subredditsSlice';
import './Subreddits.css';
import { BrowserRouter as Router, Route, NavLink, Redirect } from 'react-router-dom';
import PostPreviews from '../home/PostPreviews';
import { changeFilter, selectFilter } from '../../features/filter/filterSlice';

const Subreddits = () => {
    const dispatch = useDispatch();
    const subreddits = useSelector(selectAllSubreddits);
    const isLoadingPreviews = useSelector(isLoading);
    const filter = useSelector(selectFilter);
    
    console.log(filter + " in subreddits")
    useEffect(() => {
      dispatch(loadAllSubreddits());
    }, [dispatch]);

    if (isLoadingPreviews) {
      return (<div id="loading-container-subreddits">
          <p id="loading-subreddits">loading subreddits...</p>
        </div>);
    }
    console.log(subreddits);
    
    let hotFilterClass;
    let newFilterClass;
    let topFilterClass;

    if (filter === "hot") {
        hotFilterClass = 'title-button active-filter';
    } else {
        hotFilterClass = 'title-button';
    }

    if (filter === "new") {
        newFilterClass = 'title-button active-filter';
    } else {
        newFilterClass = 'title-button';
    }

    if (filter === "top") {
        topFilterClass = 'title-button active-filter';
    } else {
        topFilterClass = 'title-button';
    }

    const setFilter = (e) => {
        const newFilter = e.target.title;
        console.log(newFilter + " in setFilter");
        dispatch(changeFilter({ newFilter: newFilter }));
    };

    // const handleClick = (e) => {

    //     const clickedSubreddit = e.target.key;
    //     dispatch(changeCurrentSubreddit({}));

    // }

  return (
    <Router>
        <div className='section-title' >
          <button id="hot" className={hotFilterClass} onClick={setFilter} title="hot">
            HOT
          </button>
          <button id="new" className={newFilterClass} onClick={setFilter} title="new">
            NEW
          </button>
          <button id="top" className={topFilterClass} onClick={setFilter} title="top">
            TOP
          </button>
        </div>
        <div className='subreddits-container'>
        <h3 className='subreddits-main-title'>Subreddits</h3>
        <ul className="subreddits-list">
            <li><NavLink className='link' activeClassName="link-active" to='/popular'>Popular</NavLink></li>
            {subreddits.map((subreddit) => (
            <li
                key={subreddit.display_name_prefixed} 
            >
                <NavLink className='link' activeClassName="link-active" to={`/${subreddit.display_name}`}>
                    {subreddit.display_name}
                </NavLink>
            </li>
            ))}
        </ul>

        </div>
        <Route exact path="/">
            <Redirect to="/popular" />
        </Route>
        <Route path='/:subreddit'>
            <PostPreviews />
        </Route>
    </Router>
  );
};

{/* <img
                src={
                  subreddit.icon_img ||
                  `https://api.adorable.io/avatars/25/${subreddit.display_name}`
                }
                alt={`${subreddit.display_name}`}
                className="subreddit-icon"
                style={{ border: `3px solid ${subreddit.primary_color}` }}
              /> */}

export default Subreddits;
