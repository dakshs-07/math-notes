import React from 'react'

function PageWrapper({children, gradient, fontColor}) {
  return (
    <div className={`min-h-screen bg-linear-to-b ${gradient} ${fontColor}`}>{children}</div>
  )
}

export default PageWrapper