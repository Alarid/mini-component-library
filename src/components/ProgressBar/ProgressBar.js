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
      <Bar value={value} />
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

const Bar = styled.div`
  background-color: ${COLORS.primary};
  width: ${(props) => props.value}%;
  height: 100%;
  border-radius: 4px ${(props) => (props.value > 98 ? "4px 4px" : "0 0")} 4px;
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
    "--height": "24px",
    "--padding": "4px",
  },
}
