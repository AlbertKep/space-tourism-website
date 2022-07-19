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
const activeLink = "2px solid #fff";

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
            <MenuLink
              to="/"
              active={activeLink}
              onClick={() => setIsMenuOpen(false)}
            >
              01 Home
            </MenuLink>
          </MenuItem>
          <MenuItem>
            <MenuLink
              to="/destination"
              active={activeLink}
              onClick={() => setIsMenuOpen(false)}
            >
              02 Destination
            </MenuLink>
          </MenuItem>
          <MenuItem>
            <MenuLink
              to="/crew"
              active={activeLink}
              onClick={() => setIsMenuOpen(false)}
            >
              03 Crew
            </MenuLink>
          </MenuItem>
          <MenuItem>
            <MenuLink
              to="/technology"
              active={activeLink}
              onClick={() => setIsMenuOpen(false)}
            >
              04 Technology
            </MenuLink>
          </MenuItem>
        </MenuList>
      </Menu>
    </Navigation>
  );
};

export default Navbar;
