import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { BsArrowRight } from 'react-icons/bs';

export const PageLinkContainer = styled.div`
  margin: 3% 10% 0 0;
  text-align: right;
  @media (max-width: 768px) {
    margin: 3% 10% 0 0;
  }
`;
export const PageLink = styled.h4`
  color: #dda987;
  transition: all 0.3s ease-out;
  &:hover {
    color: #cfad97;
    transform: scale(1.1);
    transition: all 0.3s ease-out;
  }
  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const NextView = ({ nextTo, goTo }) => {
  return (
    <PageLinkContainer>
      <Link to={goTo}>
        <PageLink>
          {nextTo}
          <BsArrowRight className='ml-2' />
        </PageLink>
      </Link>
    </PageLinkContainer>
  );
};

export default NextView;
