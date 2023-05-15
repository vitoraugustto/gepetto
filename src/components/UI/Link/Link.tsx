import { StyledLink } from './Link.styles';
import { ILink } from './Link.types';

export const Link: React.FC<ILink> = ({ to, children }) => (
  <StyledLink to={to}>{children}</StyledLink>
);
