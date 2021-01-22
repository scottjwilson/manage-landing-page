import styled from "styled-components"
import { device } from "../../styles/MediaQueries"
import { Button } from "../../styles/ComponentStyles"
import { theme } from "../../styles/ColorStyles"
export const Wrapper = styled.footer`
  background-color: ${theme.primary.footer};
`
export const Mailbox = styled.div``
export const Links1 = styled.div``
export const Links2 = styled.div``
export const Socials = styled.div``
export const Brand = styled.div``
export const Copyright = styled.div``

export const Form = styled.form`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;

  @media ${device.mobile} {
    flex-direction: row;
  }
`
export const Input = styled.input`
  color: black;
  border-radius: 999em;
  padding: 1rem;
  width: 60%;
  margin: 0 0.5rem;
  @media ${device.laptop} {
    width: 20%;
    flex-direction: row;
  }
`

export const Go = styled(Button)`
  width: 100px;
  border-radius: 999em;
  margin: 0;
`
