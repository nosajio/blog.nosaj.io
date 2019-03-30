import styled from '../../styled';

export const RPage = styled.main`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-auto-rows: auto;
  grid-column-gap: 2.77777%;
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
`;

export const RBody = styled.article`
  grid-column: 3 / 11;
`;

export const RHeadline = styled.h1`
  font-family: ${({ theme }) => theme.fonts.tgc.f};
  font-weight: ${({ theme }) => theme.fonts.tgc.w.bold};
  font-size: ${({ theme }) => theme.msrem(4)};
  margin-bottom: ${({ theme }) => theme.msrem(3)};
`;

export const RHTML = styled.div`
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  /* transform the margin to align with the parent's */
  grid-column-gap: 4.226086%;

  /* Make sure all child elements default to full width */
  > * {
    grid-column: 1 / 9;
  }

  /* Handle typography etc here */
  h1, h2, h3, h4 {
    margin-top: ${({ theme }) => theme.ms(1)}em;
    margin-bottom: ${({ theme }) => theme.msrem(1)};
  }
  h1 {
    font-size: ${({ theme }) => theme.msrem(3)};
  }
  h2 {
    font-size: ${({ theme }) => theme.msrem(2)}
  }
  h3 {
    font-size: ${({ theme }) => theme.msrem(1)};
  }

  p {
    font-size: ${({ theme }) => theme.msrem(1)};
    margin: 0;
    line-height: 1.5;
  }

  p + p {
    margin-top: ${({ theme }) => theme.msrem(2)};
  }

  blockquote {
    font-family: ${({ theme }) => theme.fonts.mono.f};
    font-size: ${({ theme }) => theme.msrem(1)};
    margin: ${({ theme }) => theme.msrem(3)} 0;
    padding: 0;
    grid-column: 2 / 8;
  }
  blockquote p {
    margin-bottom: ${({ theme }) => theme.msrem(1)};
  }

  img {
    display: block;
    width: 100%;
    height: auto;
    margin: ${({ theme }) => theme.msrem(3)} 0;
  }

  code {
    font-family: ${({ theme }) => theme.fonts.mono.f};
    background: ${({ theme }) => theme.colors.black};
    color: white;
    padding: 2px 0.5em;
    border-radius: 3px;
  }

  ul {
    grid-column: 1 / 9;
  }

  ul li {
    font-size: ${({ theme }) => theme.msrem(1)};
    margin: ${({ theme }) => theme.msrem(-1)};
  }
`;
