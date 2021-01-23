import styled from "styled-components"
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa"
import { theme } from "../../styles/ColorStyles"
import { device } from "../../styles/MediaQueries"

export const ReviewSlider = styled.section`
  position: relative;
  display: grid;
  justify-content: center;
  align-items: center;
  text-align: center;
`

export const Review = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`

export const Avatar = styled.img``
export const LeftArrow = styled(FaArrowAltCircleLeft)`
  position: absolute;
  top: 50%;
  left: 32px;
`
export const RightArrow = styled(FaArrowAltCircleRight)`
  top: 50%;
  right: 32px;
  position: absolute;
`
