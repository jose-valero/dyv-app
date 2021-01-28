import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { BsArrowRight } from 'react-icons/bs';

export const PageLinkContainer = styled.div`
  margin: 3% 10%;
  text-align: right;
`;
export const PageLink = styled.h4`
  color: #dda987;
  transition: all 0.3s ease-out;
  &:hover {
    color: #cfad97;
    transform: scale(1.1);
    transition: all 0.3s ease-out;
    text-decoration: none;
  }
  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const NextView = ({ nextTo, goTo }) => {
  return (
    <PageLinkContainer>
      <Link to={goTo} style={{ textDecoration: 'none' }}>
        <PageLink>
          {nextTo}
          <BsArrowRight className='ml-2' />
        </PageLink>
      </Link>
    </PageLinkContainer>
  );
};

export default NextView;
