import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Navigation = styled.nav`
  background-color: transparent;
  position: absolute;
  top: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1em 1em 0;
`;

export const LogoContainer = styled.div`
  @media only screen and (min-width: 992px) {
    margin: 1em 0 0 1em;
  }
`;

export const LogoIcon = styled.img`
  padding: 0.5em;
`;

export const MenuIconContainer = styled.div`
  z-index: 999;
  cursor: pointer;

  @media only screen and (min-width: 768px) {
    display: none;
    transform: rotateX(45deg);
  }
`;

export const MenuIcon = styled.img``;

export const Menu = styled.div`
  z-index: 999;
  position: absolute;
  top: 0;
  right: ${({ menuPosition }) => menuPosition};
  height: 100vh;
  /* From https://css.glass */
  background: rgba(255, 255, 255, 0.2);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(20px);
  overflow-x: hidden;
  transition: right 0.3s ease-in-out;

  @media only screen and (min-width: 768px) {
    right: 0;
    height: auto;
  }

  @media only screen and (min-width: 992px) {
    margin-top: 1em;
  }
`;

export const MenuList = styled.ul`
  margin-top: 4em;
  z-index: 999;

  @media only screen and (min-width: 768px) {
    display: flex;
    margin-top: 0;
    padding-left: 1.5em;
    padding-right: 0.5em;
  }

  @media only screen and (min-width: 992px) {
    padding: 0 5em;
  }
`;

export const MenuItem = styled.li`
  list-style-type: none;
  padding: 1em;

  @media only screen and (min-width: 768px) {
    padding: 2em 0.5em;
  }

  @media only screen and (min-width: 992px) {
    padding-left: 2em;
  }
`;

export const MenuLink = styled(NavLink)`
  color: #fff;
  text-decoration: none;
  text-transform: uppercase;
  letter-spacing: 4.75px;
  font-weight: 400;
  padding-bottom: 0.75em;
  border-bottom: 2px solid transparent;
  transition: all 250ms ease-in-out;

  &:hover {
    border-bottom: 2px solid #707070;
  }

  &.active {
    border-bottom: ${({ active }) => (active ? active : "transparent")};
  }
`;
