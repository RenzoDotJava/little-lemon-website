import {forwardRef} from 'react'
import "./Select.css"

const Select = forwardRef(({children, error, ...props}, ref) => {
  return (
    <select {...props} className={`${error ? 'select_error' : ''}`} ref={ref}>
      {children}
    </select>
  )
})

export default Select