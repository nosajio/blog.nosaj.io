import { useState, useEffect } from 'react';
import { fetchBlogPosts, BlogPostModel } from '../services/blogData';

const useBlogData = (): BlogPostModel[] => {
  const [posts, setPosts] = useState<BlogPostModel[]>([]);
  useEffect(() => {
    fetchBlogPosts().then(posts => setPosts(posts));
  }, []);
  return posts;
};

export default useBlogData;
