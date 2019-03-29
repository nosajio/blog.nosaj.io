import * as React from 'react';
import { Link } from 'react-router-dom';
import useBlogData from '../../hooks/useBlogData';
import { PostsPg } from './styled';

interface PostsProps {}

const Posts: React.FunctionComponent<PostsProps> = props => {
  const posts = useBlogData();
  return (
    <PostsPg>
      {posts.map(p => (
        <Link to={`/r/${p.slug}`}>{p.title}</Link>
      ))}
    </PostsPg>
  );
};

export default Posts;
