/* eslint-disable no-unused-vars */
import React from "react"
import styled from "styled-components"

import { COLORS } from "../../constants"
import VisuallyHidden from "../VisuallyHidden"

export default function ProgressBar({ value, size }) {
  return (
    <Wrapper
      role="progressbar"
      aria-valuenow={value}
      aria-valuemin="0"
      aria-valuemax="100"
      style={{ ...SIZES[size] }}
    >
      <VisuallyHidden>{value}%</VisuallyHidden>
      <BarWrapper>
        <Bar value={value} />
      </BarWrapper>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  background-color: ${COLORS.transparentGray15};
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
  height: var(--height);
  border-radius: var(--border-radius);
  padding: var(--padding);
`

const BarWrapper = styled.div`
  border-radius: 4px;
  overflow-x: hidden;
  width: 100%;
  height: 100%;
`

const Bar = styled.div`
  background-color: ${COLORS.primary};
  width: ${(props) => props.value}%;
  height: 100%;
  border-radius: 4px 0 0 4px;
`

const SIZES = {
  small: {
    "--border-radius": "4px",
    "--height": "8px",
    "--padding": "0",
  },
  medium: {
    "--border-radius": "4px",
    "--height": "12px",
    "--padding": "0",
  },
  large: {
    "--border-radius": "8px",
    "--height": "16px",
    "--padding": "4px",
  },
}
