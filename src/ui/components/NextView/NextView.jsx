import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { BsArrowRight } from 'react-icons/bs';
import { useHistory } from 'react-router-dom';
import _variables from "../../../styles/_variables.module.scss"

export const PageLinkContainer = styled.div`
  margin: 3% 10%;
  text-align: right;
`;
export const PageLink = styled.h4`
  color: ${_variables.pal_1_oj_2};
  transition: all 0.3s ease-out;
  &:hover {
    color: ${_variables.pal_1_oj_1};
    transform: scale(1.1);
    transition: all 0.3s ease-out;
    text-decoration: none;
  }
  @media (max-width: 768px) {
    font-size: 16px;
  }
`;
export const StyledLink = styled(NavLink)`
  text-decoration: none;
`;

const NextView = ({ nextTo, goTo }) => {
  let history = useHistory();
  console.log('history', history);

  return (
    <PageLinkContainer>
      <StyledLink to={goTo}>
        <PageLink>
          {nextTo}
          <BsArrowRight className='ml-2' />
        </PageLink>
      </StyledLink>
    </PageLinkContainer>
  );
};

export default NextView;
