const cdnURL = process.env.REACT_APP_CDN_URL;

export type BlogPostModel = {
  date: string;
  slug: string;
  bodyHTML: string;
  bodyPlain: string;
  title: string;
};

export const fetchBlogPosts = async (): Promise<Array<BlogPostModel>> => {
  const res = await fetch(`${cdnURL}/posts.json`);
  if (res.status !== 200) {
    throw new Error('Blog posts request error');
  }
  return res.json();
};
