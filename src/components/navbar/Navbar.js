import {
  Navigation,
  LogoContainer,
  LogoIcon,
  HorizontalLine,
  MenuIconContainer,
  MenuIcon,
  Menu,
  MenuList,
  MenuItem,
} from "./Navbar.styled";

import logo from "../../assets/shared/logo.svg";
import hamburgerMenu from "../../assets/shared/icon-hamburger.svg";
import closeMenu from "../../assets/shared/icon-close.svg";

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

      {/* <HorizontalLine /> */}

      <Menu menuPosition={menuIsOpen ? "0" : "-100%"}>
        <MenuList>
          <MenuItem>
            <a href="">01 Home</a>
          </MenuItem>
          <MenuItem>
            <a href=""> 02 Destination</a>
          </MenuItem>
          <MenuItem>
            <a href=""> 03 Crew</a>
          </MenuItem>
          <MenuItem>
            <a href="">04 Technology</a>
          </MenuItem>
        </MenuList>
      </Menu>
    </Navigation>
  );
};

export default Navbar;
