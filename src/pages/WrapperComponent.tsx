import { useState } from 'react'
import React from 'react'



export default function WrapperComponent() {
  const [count, setCount] = useState(0)
  
  return (
    <>
      <div>
        WrapperComponent
      </div>
    </>
  )
}


