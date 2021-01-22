import React, { useState } from "react"

import {
  Wrapper,
  Mailbox,
  Links1,
  Links2,
  Socials,
  Brand,
  Copyright,
  Form,
  Input,
  Go,
} from "./Styles"

export const Footer = () => {
  const [email, setEmail] = useState("")
  return (
    <>
      <Wrapper>
        <Form>
          <Input
            type="email"
            defaultValue="email@example.com"
            onChange={e => setEmail(e.target.value)}
          />
          <Go>Go</Go>
        </Form>

        <Links1></Links1>
      </Wrapper>
    </>
  )
}
