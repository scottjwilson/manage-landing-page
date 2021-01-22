import React from "react"
import { StyledMenu, MenuCard } from "./Menu.styled"

const Menu = ({ open }) => {
  return (
    <StyledMenu open={open}>
      <MenuCard open={open}>
        <ul>
          <li>Pricing</li>
          <li>Product</li>
          <li>About Us</li>
          <li>Careers</li>
          <li>Community</li>
        </ul>
      </MenuCard>
    </StyledMenu>
  )
}
export default Menu
