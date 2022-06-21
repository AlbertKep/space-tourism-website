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

import logo from "../../assets/shared/logo.svg";
import hamburgerMenu from "../../assets/shared/icon-hamburger.svg";
import closeMenu from "../../assets/shared/icon-close.svg";

// import { Link } from "react-router-dom";
import { useState } from "react";

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
