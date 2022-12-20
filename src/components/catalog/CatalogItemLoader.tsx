import React from "react"
import ContentLoader from "react-content-loader"

const CatalogItemLoader = () => (
    <ContentLoader 
    speed={2}
    width={425}
    height={250}
    viewBox="0 0 425 250"
    backgroundColor="#dedede"
    foregroundColor="#ecebeb"
  >
    <rect x="298" y="26" rx="0" ry="0" width="1" height="0" /> 
    <rect x="103" y="197" rx="0" ry="0" width="1" height="0" /> 
    <rect x="0" y="0" rx="0" ry="0" width="167" height="250" /> 
    <rect x="177" y="0" rx="0" ry="0" width="245" height="30" /> 
    <rect x="177" y="35" rx="0" ry="0" width="80" height="22" /> 
    <rect x="177" y="60" rx="0" ry="0" width="210" height="22" /> 
    <rect x="177" y="95" rx="0" ry="0" width="245" height="110" /> 
    <rect x="177" y="215" rx="0" ry="0" width="87" height="32" />
  </ContentLoader>
)

export default CatalogItemLoader