import React from "react"
import { Wrapper } from "./Styles"
import { H1 } from "../../styles/TextStyles"
import { Button } from "../../styles/ComponentStyles"
export const Hero = () => {
  return (
    <div>
      <H1>Bring everyone together to build better products.</H1>
      <p>
        Manage makes it simple for software teams to plan day-to-day tasks while
        keeping the larger team goals in view.
      </p>
      <Button>Get Started</Button>
    </div>
  )
}
