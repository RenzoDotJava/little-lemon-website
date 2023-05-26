import {useReducer, useEffect} from 'react'
import {BookingForm} from '../../components'
import {fetchAPI} from '../../api'

export const initialState = {
  times: []
}

export const reducer = (state, action) => {
  if (action.type === "initialize_times") return {times: fetchAPI(new Date())}
  else if (action.type === "update_times") return {times: fetchAPI(new Date(action.payload))}
  return state
}

const BookingPage = () => {
  const [state, dispatch] = useReducer(reducer, initialState)

  useEffect(() => {
    dispatch({type: "initialize_times"})
  }, [])

  const updateTimes = date => {
    dispatch({type: "update_times", payload: date})
  }

  return (
    <main>
      <BookingForm times={state.times} updateTimes={updateTimes} />
    </main>
  )
}

export default BookingPage