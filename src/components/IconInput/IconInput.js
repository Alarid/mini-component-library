import React from "react"
import styled from "styled-components"

import { COLORS } from "../../constants"

import Icon from "../Icon"
import VisuallyHidden from "../VisuallyHidden"

const IconInput = ({ label, icon, width = 250, size, placeholder }) => {
  return (
    <Wrapper>
      <VisuallyHidden>{label}</VisuallyHidden>
      <Input
        type="text"
        placeholder={placeholder}
        style={{ "--width": width + "px", ...STYLES[size] }}
      />
      <IconWrapper style={{ "--height": `${ICON_SIZES[size]}px` }}>
        <Icon id={icon} size={ICON_SIZES[size]} />
      </IconWrapper>
    </Wrapper>
  )
}

const ICON_SIZES = { small: 16, large: 24 }

const STYLES = {
  small: {
    "--fontSize": `${14 / 16}rem`,
    "--paddingLeft": `${ICON_SIZES.small + 8}px`,
    "--height": `${24 / 16}rem`,
    "--borderThickness": `${1 / 16}rem`,
  },
  large: {
    "--fontSize": `${18 / 16}rem`,
    "--paddingLeft": `${ICON_SIZES.large + 12}px`,
    "--height": `${36 / 16}rem`,
    "--borderThickness": `${2 / 16}rem`,
  },
}

const Wrapper = styled.label`
  display: block;
  position: relative;
  color: ${COLORS.gray700};
  &:hover {
    color: ${COLORS.black};
  }
`

const Input = styled.input`
  padding-left: var(--paddingLeft);
  border: 0;
  border-bottom: solid ${COLORS.black};
  border-bottom-width: var(--borderThickness);
  font-family: "Roboto", sans-serif;
  font-size: var(--fontSize);
  font-weight: 700;
  color: inherit;
  width: var(--width);
  height: var(--height);

  &::placeholder {
    font-weight: 400;
    color: ${COLORS.gray500};
  }

  &:focus {
    outline-offset: 3px;
  }
`

const IconWrapper = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto 0;
  height: var(--height);
  color: inherit;
`

export default IconInput
