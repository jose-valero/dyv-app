import styled from 'styled-components';
import heroImg from '../../../assets/images/test_ban_2.png';

export const Hero = styled.div`
  background-image: url(${heroImg});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  height: 250px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fdfdfd;
`;
