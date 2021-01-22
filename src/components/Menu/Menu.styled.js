import styled from "styled-components"
import { theme } from "../../styles/ColorStyles"
import { device } from "../../styles/MediaQueries"
export const StyledMenu = styled.nav`
  transform: ${({ open }) => (open ? "translateY(0)" : "translateY(-100%)")};
  background: white;

  display: flex;

  background: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2));
  height: 100vh;
  text-align: center;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  transition: transform 0.1s cubic-bezier(0.455, 0.03, 0.515, 0.955);
`

export const MenuCard = styled.div`
  transform: ${({ open }) => (open ? "translateY(0)" : "translateY(-100%)")};
  transition: transform 0.4s cubic-bezier(0.215, 0.61, 0.355, 1);
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 10px 20px rgba(80, 86, 98, 0.03);
  height: 50vh;
  border-radius: 4px;
  width: 90%;
  margin: 6rem auto;
  background-color: white;
  ul {
    list-style: none;
  }
  li {
    text-transform: capitalize;
    padding: 1rem 0;
    font-weight: bold;

    color: ${theme.primary.light};
    text-decoration: none;
    transition: color 0.3s linear;

    &:hover {
      color: ${theme.accent.red}};
      cursor: pointer;
    }
  }
`
