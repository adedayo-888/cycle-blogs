import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const PostContainer = styled.div`
  width: 385px;
  margin: 0px 25px 40px 25px;
  display: flex;
  flex-direction: column;
  img: {
    width: 385px;
    height: 280px;
    object-fit: cover;
    border-radius: 7px;
  }
`;
export const PostInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const PostCat = styled(Link)`
  font-family: 'Lato', sans-serif;
  font-weight: 400;
  font-size: 11px;
  color: #be9656;
  line-height: 19px;
  margin-top: 15px;
  margin-right: 10px;
  cursor: pointer;
`;
export const PostTitle = styled(Link)`
  font-family: 'Lato', sans-serif;
  font-size: 24px;
  font-weight: 900;
  margin-top: 15px;
  cursor: pointer;
`;
export const PostDate = styled.p`
  font-family: 'Lato', sans-serif;
  font-style: italic;
  font-size: 13px;
  font-weight: 400;
  color: #999999;
  margin-top: 15px;
`;
export const PostDesc = styled.p`
  font-family: 'Lato', sans-serif;
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  color: #444444;
  margin-top: 15px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
`;
