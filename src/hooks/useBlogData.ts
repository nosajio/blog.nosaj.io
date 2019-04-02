import { useEffect, useState } from 'react';
import { BlogPostModel, fetchBlogPosts } from '../services/blogData';

const useBlogData = (): BlogPostModel[] => {
  const [posts, setPosts] = useState<BlogPostModel[]>([]);
  useEffect(() => {
    fetchBlogPosts().then(posts => setPosts(posts));
  }, []);
  return posts;
};

export default useBlogData;
