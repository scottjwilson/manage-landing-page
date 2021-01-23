import React from "react"
import { H1 } from "../../styles/TextStyles"
import { Wrapper, TextWrap, ButtonWrap, CTAButton } from "./Styles"
export const CTA = () => {
  return (
    <Wrapper>
      <TextWrap>
        <H1>Simplify how your team works today.</H1>
      </TextWrap>
      <ButtonWrap>
        <CTAButton>Get Started</CTAButton>
      </ButtonWrap>
    </Wrapper>
  )
}
