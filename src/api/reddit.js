export const API_ROOT = 'https://www.reddit.com';

export const getSubredditPosts = async (payload) => {
  const {subreddit, filter} = payload;
  const response = await fetch(`${API_ROOT}/${subreddit}/${filter}.json`);
  const json = await response.json();
  return json;
};

export const getSubreddits = async () => {
  const response = await fetch(`${API_ROOT}/subreddits.json`);
  const json = await response.json();

  return json;
};

export const getPostComments = async (permalink) => {
  const response = await fetch(`${API_ROOT}${permalink}.json`);
  const json = await response.json();

  return json;
};
