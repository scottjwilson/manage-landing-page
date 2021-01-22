import React, { useState, useRef } from "react"
import { useOnClickOutside } from "../../hooks/useOnClickOutside"
import Burger from "../Burger"
import Menu from "../Menu"
import { Wrapper } from "./Styles"

import logo from "../../images/logo.svg"
export const Header = () => {
  const [open, setOpen] = useState(false)
  const node = useRef()
  useOnClickOutside(node, () => setOpen(false))
  return (
    <Wrapper>
      <img src={logo} />
      <div ref={node}>
        <Burger open={open} setOpen={setOpen} />
        <Menu open={open} setOpen={setOpen} />
      </div>
    </Wrapper>
  )
}
