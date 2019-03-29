import * as React from 'react';
import { Link } from 'react-router-dom';
import useBlogData from '../../hooks/useBlogData';
import { PostsPg, PostsYear, PostItem } from './styled';
import { BlogPostModel } from '../../services/blogData';

interface PostsProps {}
type yearsList = {
  [year: string]: Array<BlogPostModel>;
};

const Posts: React.FunctionComponent<PostsProps> = props => {
  const posts = useBlogData();
  const postsByYear = posts.reduce<yearsList>((yrs, p) => {
    const d = new Date(p.date);
    const y = String(d.getFullYear());
    if (!Object.keys(yrs).includes(y)) {
      yrs[y] = [];
    }
    yrs[y].push(p);
    return yrs;
  }, {});
  return (
    <PostsPg>
      {Object.keys(postsByYear).reverse().map(y => (
        <>
          <PostsYear>{y}</PostsYear>
          {postsByYear[y].map(p => (
            <PostItem to={`/${p.slug}`}>{p.title}</PostItem>
          ))}
        </>
      ))}
    </PostsPg>
  );
};

export default Posts;
