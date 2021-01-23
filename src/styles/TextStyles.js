import styled from "styled-components"
import { device } from "../styles/MediaQueries"
export const H1 = styled.h1`
  font-size: 3rem;

  @media ${device.laptop} {
    font-size: 4rem;
  }
`
export const H2 = styled.h2`
  font-size: 2rem;

  @media ${device.laptop} {
    font-size: 3rem;
  }
`
export const H3 = styled.h3``

export const H3Small = styled.h3``

export const H4 = styled.h4``

export const BodyIntro = styled.p`
  line-height: 140%;
`
export const BodyMain = styled.p`
  font-size: 15px;
  line-height: 28px;
`
