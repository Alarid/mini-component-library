import React from "react"
import styled from "styled-components"

import { COLORS } from "../../constants"
import Icon from "../Icon"
import { getDisplayedValue } from "./Select.helpers"

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children)

  return (
    <Wrapper>
      <Decorator>
        {displayedValue}
        <DownArrow />
      </Decorator>
      <NativeSelect aria-label={label} value={value} onChange={onChange}>
        {children}
      </NativeSelect>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  position: relative;
  width: max-content;
  color: ${COLORS.gray700};
  &:hover {
    color: ${COLORS.black};
  }
`

const NativeSelect = styled.select`
  /* appearance: none; */
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
`

const Decorator = styled.div`
  background-color: ${COLORS.transparentGray15};
  border-radius: 8px;
  padding: 12px 52px 12px 16px;
  font-size: 1rem;
  font-family: "Roboto", sans-serif;
`

const DownArrow = styled(Icon).attrs({
  id: "chevron-down",
  size: 24,
  strokeWidth: 2,
})`
  position: absolute;
  right: 5px;
  top: 50%;
  transform: translateY(-50%);
  color: currentColor;
`

export default Select
