import styled from '../../styled';
import { Link } from 'react-router-dom';

export const PostsPg = styled.main`
  display: grid;
  max-width: 1400px;
  width: 100%;
  margin: 0 auto;
  grid-template-columns: repeat(12, 1fr);
  grid-gap: 2.777%;
  grid-auto-rows: auto;
`;

export const PostItem = styled(Link)`
  display: block;
  font-size: ${({ theme }) => theme.msrem(2)};
  font-family: ${({ theme }) => theme.fonts.tgc.f};
  font-weight: ${({ theme }) => theme.fonts.tgc.w.bold};
  grid-column: 2 / 12;
  text-decoration: none;
`;

export const PostsYear = styled.h1`
  display: block;
  font-size: ${({ theme }) => theme.msrem(4)};
  font-family: ${({ theme }) => theme.fonts.tgc.f};
  font-weight: ${({ theme }) => theme.fonts.tgc.w.heavy};
  color: ${({ theme }) => theme.colors.greyLight};
  grid-column: 2 / 12;
`;
