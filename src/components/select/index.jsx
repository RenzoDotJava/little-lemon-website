import {forwardRef} from 'react'
import "./Select.css"

const Select = forwardRef(({children, ...props}, ref) => {
  return (
    <select {...props} ref={ref}>
      {children}
    </select>
  )
})

export default Select