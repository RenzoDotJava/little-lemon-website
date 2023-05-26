import {forwardRef} from 'react'
import "./Input.css"

const Input = forwardRef(({type, ...props}, ref) => {
  return (
    <input
      type={type}
      ref={ref}
      {...props}
    />
  )
})

export default Input