import Header from '../../components/Header/Header';
import Post from '../../components/Post/Post';
import Sidebar from '../../components/Sidebar/Sidebar';
import { HomeContainer } from './HomeStyles';
export const Home = () => {
  return (
    <>
      <Header />
      <HomeContainer>
        <Post />
        <Sidebar />
      </HomeContainer>
    </>
  );
};
