import React from 'react';
import { Link } from 'react-router-dom';
import {
  PostContainer,
  PostInfo,
  PostCat,
  PostTitle,
  PostDate,
  PostDesc,
} from './PostStyles';
import images from '../../images/sidebar.jpg';
const Post = () => {
  return (
    <PostContainer>
      <img src={images} alt='Sidebar-Image' />
      <PostInfo>
        <PostCat>
          <Link to='/posts?cat=News'>News</Link>
        </PostCat>
        <PostCat>
          <Link to='/posts?cat=Road'>Road Bikes</Link>
        </PostCat>

        <PostTitle>
          <Link to='/post/abc'>Lorem ipsum dolor sit amet</Link>
        </PostTitle>
        <hr />
        <PostDate>1 hour ago</PostDate>
      </PostInfo>
      <PostDesc>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda
        officia architecto deserunt deleniti? Labore ipsum aspernatur magnam
        fugiat, reprehenderit praesentium blanditiis quos cupiditate ratione
        atque, exercitationem quibusdam, reiciendis odio laboriosam?
      </PostDesc>
    </PostContainer>
  );
};

export default Post;
