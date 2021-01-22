import styled from "styled-components"
import { device } from "./MediaQueries"
export const Button = styled.button`
  color: white;
  width: 100%;

  padding: 1rem 0;
  border: none;
  background: #f3603c;
  box-shadow: 0px 15px 15px -10px #ff9f8e;
  border-radius: 22px;
  @media ${device.laptop} {
    width: 280px;
  }
`
