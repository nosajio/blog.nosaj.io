import * as React from 'react';
import { match } from 'react-router';
import useBlogData from '../../hooks/useBlogData';
import { RBody, RHTML, RPage, RHeadline } from './styled';

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
  return (
    <RPage>
      <RBody>
        <RHeadline>{post.title}</RHeadline>
        <RHTML dangerouslySetInnerHTML={{ __html: post.bodyHTML }} />
      </RBody>
    </RPage>
  );
};

export default Read;
