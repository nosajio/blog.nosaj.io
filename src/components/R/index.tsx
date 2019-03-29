import * as React from 'react';
import { RPage } from './styled';
import { match } from 'react-router';
import useBlogData from '../../hooks/useBlogData';

interface ReadProps {
  match: match<{ slug: string }>;
}

const Read: React.FunctionComponent<ReadProps> = ({ match }) => {
  const slug = match.params.slug;
  const posts = useBlogData();
  const post = posts.find(p => p.slug === slug);
  if (!post) {
    return null;
  }
  return <RPage>{post.title}</RPage>;
};

export default Read;
