import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const SidebarContainer = styled.div`
  flex: 3;
  height: fit-content;
  margin: 20px;
  padding-bottom: 30px;
  background-color: #fdfbfb;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const SidebarItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  img: {
    margin-top: 15px;
    width: 250px;
    height: 250px;
  }
  paragh: {
    padding: 30px;
  }
`;
export const SidebarTitle = styled.h3`
  margin: 10px;
  padding: 5px;
  width: 80%;
  border-top: solid 1px #a7a4a4;
  border-bottom: solid 1px #a7a4a4;
  text-align: center;
  font-family: 'Lato', sans-serif;
  font-weight: 400;
  font-size: 12px;
  line-height: 19px;
  color: #222222;
  font-weight: 600;
`;

export const SidebarList = styled.ul`
  list-style-type: none;
  margin-bottom: 30px;
`;
export const SidebarListItem = styled(Link)`
  display: inline-block;
  width: 50%;
  margin-top: 15px;
  cursor: pointer;
`;

export const SidebarSocial = styled.div`
  margin-top: 15px;
  width: 250px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
