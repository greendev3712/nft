import styled, { css } from "styled-components"

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  padding: 0;
`

export const CardInnerContainer = styled.div`
  width: 8.5rem;
  height: 8.5rem;
  border-radius: 12px;
  border: 1px solid #242424;
  position: relative;

  ${({ bgColor }) =>
    bgColor &&
    css`
      background-color: ${bgColor};
    `}
`

export const NetImage = styled.img`
  width: 100%;
  height: 100%;
  position: absolute;
`

export const AttributeImage = styled.img`
  width: 100%;
  height: 100%;
  position: absolute;
`

export const AttributeBox = styled.div`
  width: 8.5rem;
  height: 2.5rem;
  border-radius: 12px;
  text-align: center;
  border: 1px solid #242424;
  display: flex;
  justify-content: center;
  align-items: center;

  ${({ bgColor }) =>
    bgColor &&
    css`
      background-color: ${bgColor};
    `}
`

export const AttributeText = styled.p`
  font-size: 1.2rem;
  color: #fff;
  text-shadow: #000 1px 0 1px, #000 0 1px 1px, #000 -1px 0 1px, #000 0 -1px 1px;
`
