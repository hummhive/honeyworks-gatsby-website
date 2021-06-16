/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

import React from "react"
import HummProviderWrapper from "./src/components/HummProviderWrapper"
import "@fontsource/nunito" // Defaults to weight 400.
import "@fontsource/nunito/900.css" // Weight 500.

// we cannot execute static queries outside of the `src` dir so we can define the
// component there and assign it here
export const wrapRootElement = ({ element }) =>
  <HummProviderWrapper>{element}</HummProviderWrapper>;