import {useEffect, useRef, useState} from "react"
import Input from "../input"
import Select from "../select"
import {submitAPI} from "../../api"
import "./BookingForm.css"
import {useNavigate} from "react-router-dom"

const BookingForm = ({times, updateTimes}) => {
  const navigate = useNavigate()
  const date = useRef(new Date().toISOString().split('T')[0])
  const [time, setTime] = useState()
  const guests = useRef("1")
  const occasion = useRef("Birthday")

  const onSubmit = e => {
    e.preventDefault()
    const form = {
      date: date.current,
      time,
      guests: guests.current,
      occasion: occasion.current
    }
    const res = submitAPI(form)
    if (res) navigate('/booking/confirmation', {state: {form}})
  }

  const handleChangeDate = value => {
    date.current = value
    updateTimes(new Date(value.replace(/-/g, '\/')))
  }

  //TODO: add the setTime on the dispatch
  useEffect(() => {
    setTime(times.length > 0 ? times[0] : "")
  }, [times])

  return (
    <section className="booking">
      <h1 className="display_title">Booking!</h1>
      <form onSubmit={onSubmit}>
        <div>
          <label htmlFor="res-date" className="card_title">Choose date</label>
          <Input type="date" id="res-date" defaultValue={date.current} onChange={(e) => handleChangeDate(e.target.value)} />
        </div>
        <div>
          <label htmlFor="res-time" className="card_title">Choose time</label>
          <Select id="res-time" data-testid="res-time" value={time} onChange={(e) => setTime(e.target.value)}>'
            {times.length === 0 && <option value="" disabled>No times available</option>}
            {times.map(t => <option key={t} value={t}>{t}</option>)}
          </Select>
        </div>
        <div>
          <label htmlFor="guests" className="card_title">Number of guests</label>
          <Input type="number" defaultValue={guests.current} min="1" max="10" id="guests" onChange={(e) => guests.current = e.target.value} />
        </div>
        <div>
          <label htmlFor="occasion" className="card_title">Occasion</label>
          <Select id="occasion" defaultValue={occasion.current} onChange={(e) => occasion.current = e.target.value}>
            <option value={'Birthday'}>Birthday</option>
            <option value={'Anniversary'}>Anniversary</option>
          </Select>
        </div>
        <input className='card_title' type="submit" value="Make Your reservation" />
      </form>
    </section>
  )
}

export default BookingForm