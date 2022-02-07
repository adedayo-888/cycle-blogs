import styled from 'styled-components';
import images from '../../images/cryptobcg.jpg';
export const HeaderContainer = styled.div`
  height: calc(100vh - 5rem);
  margin-top: 80px;
  width: 100%;
`;
export const HeaderWrapper = styled.div``;
export const HeaderTitle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const Span1 = styled.h4`
  font-size: 1.5rem;
  width: 60%;
  margin-bottom: 2rem;
  text-transform: capitalize;
  text-align: center;
`;
export const Span2 = styled.h1`
  margin-bottom: 2rem;
  font-size: 5rem;
  color: #024a17;
  font-family: 'Lato', sans-serif;
  @media (max-width: 768px) {
    font-size: 3rem;
  }
`;
export const Span3 = styled.p`
  font-size: 1rem;
  width: 60%;
  margin-bottom: 2rem;
  text-transform: capitalize;
  text-align: center;
`;

export const HeaderImg = styled.div`
  width: 100%;
  margin-top: 80px;
  /* background-image: url(${images});
  background-repeat: no-repeat;
  background-size: cover; */
  img: {
  }
`;
