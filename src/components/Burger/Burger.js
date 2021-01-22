import React from "react"
import { BurgerWrapper, StyledBurger } from "./Burger.styled"

const Burger = ({ open, setOpen }) => {
  return (
    <BurgerWrapper>
      <StyledBurger open={open} onClick={() => setOpen(!open)}>
        <div />
        <div />
        <div />
      </StyledBurger>
    </BurgerWrapper>
  )
}

export default Burger
