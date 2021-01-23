import styled from "styled-components"
import { Button } from "../../styles/ComponentStyles"

import { device } from "../../styles/MediaQueries"
import { theme } from "../../styles/ColorStyles"
export const Wrapper = styled.div`
  background-color: ${theme.accent.red};
  color: white;
  padding: 4rem 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;

  @media ${device.laptop} {
    text-align: left;

    flex-direction: row;
    justify-content: space-between;
  }
`

export const TextWrap = styled.div`
  @media ${device.laptop} {
    width: 70%;
  }
`
export const ButtonWrap = styled.div``

export const CTAButton = styled(Button)`
  width: 100%;

  background-color: white;
  color: black;
`
