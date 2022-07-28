import { FOOTER_HEIGHT, HEADER_HEIGHT } from '../../config';

const Main = ({ children }) => {
  return <main style={{ minHeight: `calc(100vh - ${HEADER_HEIGHT + FOOTER_HEIGHT}px)` }}>{children}</main>;
};

export default Main;
