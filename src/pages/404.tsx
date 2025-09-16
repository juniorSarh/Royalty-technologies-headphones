import React from 'react'
import ErrorImage from "../assets/folder.png"

export default function Error404() {
  return (
    <div>
      <h1>Page not Found</h1>
     <img src={ErrorImage} alt="Headphone Image" />
    </div>
  )
}
