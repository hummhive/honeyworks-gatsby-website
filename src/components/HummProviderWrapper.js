import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { HummProvider } from "@hummhive/react-web-data"

export default ({ children }) => {
  const { coreStaticDataJson: staticCoreData } = useStaticQuery(graphql`
    query {
      coreStaticDataJson {
        hivePublicKey
        dataBridge {
          addInboxDataEndpoint
          getDataEndpoint
          listDataKeysEndpoint
        }
      }
    }
  `)
  
  return (
    <HummProvider staticCoreData={staticCoreData}>{children}</HummProvider>
  )
}