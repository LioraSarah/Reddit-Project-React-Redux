// import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setSearchTerm, clearSearchTerm, selectSearchTerm } from '../../../features/search/searchSlice.js';

import searchIconUrl from "../../../media/search.png";
import clearIconUrl from "../../../media/close.png";

export const Search = () => {

    const searchTerm = useSelector(selectSearchTerm);
    const dispatch = useDispatch();

    const onSearchTermChangeHandler = (e) => {
        const userInput = e.target.value;
        dispatch(setSearchTerm(userInput));
    };
    
    const onClearSearchTermHandler = () => {
        dispatch(clearSearchTerm());
    };

    return (
        <div id="search-container">
            <img id="search-icon" alt="search" src={searchIconUrl} height="20px" />
            <input
                id="search"
                type="text"
                value={searchTerm}
                onChange={onSearchTermChangeHandler}
                placeholder="Search recipes"
            />
            {searchTerm.length > 0 && (
                <button
                onClick={onClearSearchTermHandler}
                type="button"
                id="search-clear-button"
                >
                <img src={clearIconUrl} alt="X" height="10px" />
                </button>
            )}
        </div>
    );

}