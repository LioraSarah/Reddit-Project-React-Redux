import React from 'react';
import "./Home.css";
import {PostsList} from "./postsList/PostsList";

export function Home() {
  return (
    <div>
      <PostsList />
    </div>
  );
}