const cdnURL = process.env.REACT_APP_CDN_URL;

export const fetchBlogPosts = async (): Promise<object> => {
  const res = await fetch(`${cdnURL}/posts.json`);
  if (res.status !== 200) {
    throw new Error('Blog posts request error');
  }
  return res.json()
}