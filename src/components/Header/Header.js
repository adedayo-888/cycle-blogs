import {
  HeaderContainer,
  HeaderWrapper,
  HeaderTitle,
  Span1,
  Span2,
  Span3,
  HeaderImg,
} from './HeaderStyles';
import images from '../../images/cyclebcg.jpg';

const Header = () => {
  return (
    <>
      <HeaderContainer>
        <HeaderWrapper>
          <HeaderTitle>
            <Span2>Cyclist--blogs</Span2>
            <Span1>
              for all your latest Cycling news <br />
              and useful tips and advice
            </Span1>
            <Span3>Sign up to be part of our community</Span3>
          </HeaderTitle>
          <HeaderImg>
            <img
              src={images}
              alt=''
              style={{ height: '400px', width: '100%' }}
            />
          </HeaderImg>
        </HeaderWrapper>
      </HeaderContainer>
    </>
  );
};

export default Header;
