import {
  Navigation,
  LogoContainer,
  LogoIcon,
  MenuIconContainer,
  MenuIcon,
  Menu,
  MenuList,
  MenuItem,
  MenuLink,
} from "./Navbar.styled";

import { useState } from "react";

const logo = "./assets/shared/logo.svg";
const hamburgerMenu = "./assets/shared/icon-hamburger.svg";
const closeMenu = "./assets/shared/icon-close.svg";

const Navbar = () => {
  const [menuIsOpen, setIsMenuOpen] = useState(false);
  return (
    <Navigation>
      <LogoContainer>
        <LogoIcon src={logo} alt="logo" />
      </LogoContainer>
      <MenuIconContainer>
        <MenuIcon
          src={menuIsOpen ? closeMenu : hamburgerMenu}
          alt="menu icon"
          onClick={() => setIsMenuOpen((prev) => !prev)}
        ></MenuIcon>
      </MenuIconContainer>

      <Menu menuPosition={menuIsOpen ? "0" : "-100%"}>
        <MenuList>
          <MenuItem>
            <MenuLink to="/">01 Home</MenuLink>
          </MenuItem>
          <MenuItem>
            <MenuLink to="/destination">02 Destination</MenuLink>
          </MenuItem>
          <MenuItem>
            <MenuLink to="/crew"> 03 Crew</MenuLink>
          </MenuItem>
          <MenuItem>
            <MenuLink to="/technology">04 Technology</MenuLink>
          </MenuItem>
        </MenuList>
      </Menu>
    </Navigation>
  );
};

export default Navbar;
