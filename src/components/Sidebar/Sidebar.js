import { Link } from 'react-router-dom';
import {
  SidebarContainer,
  SidebarItem,
  SidebarTitle,
  SidebarList,
  SidebarListItem,
} from './SidebarStyles';
import { categoryList } from './catList';
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaTwitterSquare,
  FaWhatsappSquare,
} from 'react-icons/fa';
import images from '../../images/aboutcycles.jpg';

const Sidebar = () => {
  return (
    <>
      <SidebarContainer>
        <SidebarItem>
          <SidebarTitle>About Us</SidebarTitle>
          <img src={images} alt='About Us Image' />
          <Paragh>
            Laboris sunt aute cupidatat velit magna velit ullamco dolore mollit
            amet ex esse.Sunt eu ut nostrud id quis proident.
          </Paragh>
        </SidebarItem>

        <SidebarItem>
          <SidebarTitle>Category</SidebarTitle>
          <SidebarList>
            <SidebarListItem>
              {categoryList.map((item) => (
                <Link to={item.path} key={item.id}>
                  {item.name}
                </Link>
              ))}
            </SidebarListItem>
          </SidebarList>
        </SidebarItem>

        <SidebarItem>
          <SidebarTitle>Follow Us</SidebarTitle>
          <SidebarSocial>
            <SidebarIcons>
              <FaFacebookSquare
                style={{ fontSize: '16px', marginLeft: '10px' }}
              />
              <FaInstagramSquare
                style={{ fontSize: '16px', marginLeft: '10px' }}
              />
              <FaTwitterSquare
                style={{ fontSize: '16px', marginLeft: '10px' }}
              />
              <FaWhatsappSquare
                style={{ fontSize: '16px', marginLeft: '10px' }}
              />
            </SidebarIcons>
          </SidebarSocial>
        </SidebarItem>
      </SidebarContainer>
    </>
  );
};
export default Sidebar;
