import {forwardRef} from 'react'
import "./Input.css"

const Input = forwardRef(({type, error, ...props}, ref) => {

  return (
    <input
      className={`${error ? 'input_error' : ''}`}
      type={type}
      ref={ref}
      {...props}
    />
  )
})

export default Input