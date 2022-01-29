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
        style={{ "--width": width + "px", ...SIZES[size] }}
      />
      <IconWrapper>
        <Icon id={icon} size={ICON_SIZES[size]} />
      </IconWrapper>
    </Wrapper>
  )
}

const ICON_SIZES = { small: 16, large: 24 }

const SIZES = {
  small: {
    "--fontSize": `${14 / 16}rem`,
    "--paddingLeft": `${ICON_SIZES.small + 8}px`,
  },
  large: {
    "--fontSize": `${18 / 16}rem`,
    "--paddingLeft": `${ICON_SIZES.large + 12}px`,
  },
}

const Wrapper = styled.label`
  position: relative;
`

const Input = styled.input`
  padding: 4px 0;
  padding-left: var(--paddingLeft);
  border: 0;
  border-bottom: 1px solid ${COLORS.black};
  font-family: "Roboto", sans-serif;
  font-size: var(--fontSize);
  font-weight: 700;
  color: ${COLORS.gray700};
  width: var(--width);

  &:hover {
    color: ${COLORS.black};
  }

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
  bottom: 2px;
  left: 0;
  color: ${COLORS.gray700};

  ${Input}:hover + & {
    color: ${COLORS.black};
  }
`

export default IconInput
