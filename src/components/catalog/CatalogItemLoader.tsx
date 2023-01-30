import React from "react"
import ContentLoader from "react-content-loader"

const CatalogItemLoader = () => (
  <ContentLoader 
    speed={2}
    width={234}
    height={350}
    viewBox="0 0 234 350"
    backgroundColor="#d6d6d6"
    foregroundColor="#ecebeb"
  >
    <rect x="298" y="26" rx="0" ry="0" width="1" height="0" /> 
    <rect x="103" y="197" rx="0" ry="0" width="1" height="0" /> 
    <rect x="0" y="0" rx="15" ry="15" width="234" height="350" />
  </ContentLoader>
)

export default CatalogItemLoader