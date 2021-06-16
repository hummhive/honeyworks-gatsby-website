/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

// You can delete this file if you're not using it
import React from "react"
import HummProviderWrapper from "./src/components/HummProviderWrapper"

// we cannot execute static queries outside of the `src` dir so we can define the
// component there and assign it here
export const wrapRootElement = ({ element }) =>
  <HummProviderWrapper>{element}</HummProviderWrapper>;