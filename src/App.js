import Navbar from './components/Navbar/Navbar';
import { Routes, Route } from 'react-router-dom';
import GlobalStyle from './globals';
import { Home } from './pages/Home/Home';
import Single from './pages/Single/Single';
const app = () => {
  return (
    <>
      <GlobalStyle />
      <Navbar />
      <Routes>
        <Route path='/' element={<Single />} />
        <Route path='/post' element={<Post />} />
      </Routes>
    </>
  );
};

export default app;
