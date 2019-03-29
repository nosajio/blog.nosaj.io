import styled from '../../styled';

export const MastheadFrame = styled.header`
  position: relative;
  display: flex;
  place-items: space-between center;
  width: 100%;
  padding: ${({ theme }) => theme.msrem(3)} 2.777% 0;
`;

export const MastheadPattern = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: ${({ theme }) => theme.msrem(1)};
  background: url('/wavey-strip.svg') no-repeat top left / cover;
`;

export const MastheadTitle = styled.h1`
  font-family: ${({ theme }) => theme.fonts.tgc.f};
  font-weight: ${({ theme }) => theme.fonts.tgc.w.bold};
  font-size: ${({ theme }) => theme.msrem(2)};

  > a {
    text-decoration: none;
    display: inline;
    background: linear-gradient(
        0deg,
        ${({ theme }) => theme.colors.greyMid},
        transparent
      )
      repeat-x bottom / 1px 2px;
  }
`;
