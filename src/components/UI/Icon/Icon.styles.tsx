import styled from '@emotion/styled';

export const StyledSpan = styled('span')<{
  size?: string | number;
  source: string;
}>`
  min-width: ${({ size }) => (size ? size : '18px')};
  min-height: ${({ size }) => (size ? size : '18px')};
  background-image: ${({ source }) => `url(${source})`};
  background-size: contain;
  background-repeat: no-repeat;
`;
