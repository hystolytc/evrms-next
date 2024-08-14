import React from 'react'
import ContentLoader from "react-content-loader"

const ProductListLoader = () => (
  <ContentLoader
    speed={2}
    width={230}
    height={320}
    viewBox="0 0 230 320"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <rect x="0" y="0" rx="8" ry="8" width="100%" height="180" /> 
    <rect x="8" y="184" rx="8" ry="8" width="50%" height="20" /> 
    <rect x="8" y="222" rx="8" ry="8" width="30%" height="20" /> 
  </ContentLoader>
)

export default ProductListLoader