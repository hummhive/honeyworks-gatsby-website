import React from "react"
import PropTypes from "prop-types"

import BlockWrapper from "./BlockWrapper"
import P from "./P"
import H2 from "./H2"
import H3 from "./H3"
import H4 from "./H4"
import LI from "./LI"
import UL from "./UL"
import OL from "./OL"
import Quote from "./Quote"
import Code from "./Code"
import Divider from "./Divider"
import Image from "./Image"

const Block = props => {
  switch (props.element.type) {
    case "p":
      return (
        <BlockWrapper attributes={props.attributes} element={props.element}>
          <P {...props} />
        </BlockWrapper>
      )
    case "h2":
      return (
        <BlockWrapper attributes={props.attributes} element={props.element}>
          <H2 {...props} />
        </BlockWrapper>
      )
    case "h3":
      return (
        <BlockWrapper attributes={props.attributes} element={props.element}>
          <H3 {...props} />
        </BlockWrapper>
      )
    case "h4":
      return (
        <BlockWrapper attributes={props.attributes} element={props.element}>
          <H4 {...props} />
        </BlockWrapper>
      )
    case "li":
      return (
        <LI {...props} {...props.element}>
          {props.children}
        </LI>
      )
    case "ul":
      return (
        <BlockWrapper attributes={props.attributes} element={props.element}>
          <UL {...props} />
        </BlockWrapper>
      )
    case "ol":
      return (
        <BlockWrapper attributes={props.attributes} element={props.element}>
          <OL {...props} />
        </BlockWrapper>
      )
    case "quote":
      return (
        <BlockWrapper attributes={props.attributes} element={props.element}>
          <Quote {...props} />
        </BlockWrapper>
      )
    case "code":
      return (
        <BlockWrapper attributes={props.attributes} element={props.element}>
          <Code {...props} />
        </BlockWrapper>
      )
    case "divider":
      return (
        <BlockWrapper attributes={props.attributes} element={props.element}>
          <Divider {...props} />
        </BlockWrapper>
      )
    case "image":
      return (
        <BlockWrapper attributes={props.attributes} element={props.element}>
          <Image {...props} />
          {props.children}
        </BlockWrapper>
      )
    default:
      return <P {...props}>{props.children}</P>
  }
}

Block.propTypes = {
  element: PropTypes.object,
  children: PropTypes.array,
  attributes: PropTypes.array,
}

export default Block
