import {useEffect} from "react"
import {useNavigate} from "react-router-dom"
import {useForm} from "react-hook-form"
import {submitAPI} from "../../api"
import Input from "../input"
import Select from "../select"
import "./BookingForm.css"

const BookingForm = ({times, updateTimes}) => {
  const navigate = useNavigate()
  const {register, handleSubmit, watch, formState: {errors, isValid}} = useForm({
    values: {
      date: new Date().toISOString().split('T')[0],
      time: times[0],
      guests: "1",
      occasion: "Birthday"
    }
  })

  const watchDate = watch("date")

  const onSubmit = form => {
    const res = submitAPI(form)
    if (res) navigate('/booking/confirmation', {state: {form}})
  }

  useEffect(() => {
    updateTimes(new Date(watchDate.replace(/-/g, '\/')))
  }, [watchDate])

  return (
    <section className="booking">
      <h1 className="display_title">Booking!</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="res-date" className="card_title">Choose date</label>
          <Input error={errors?.date} id="res-date" type="date" {...register("date", {required: 'Field is required'})} />
          {errors?.date && <label className="error">{errors.date?.message}</label>}
        </div>
        <div>
          <label htmlFor="res-time" className="card_title">Choose time</label>
          <Select error={errors?.time} id="res-time" data-testid="res-time" {...register("time", {required: 'Field is required'})}>
            {times.length === 0 && <option value="" disabled>No times available</option>}
            {times.map(t => <option key={t} value={t}>{t}</option>)}
          </Select>
          {errors?.time && <label className="error">{errors.time?.message}</label>}
        </div>
        <div>
          <label htmlFor="res-guests" className="card_title">Number of guests</label>
          <Input error={errors?.guests} data-testid="res-guests" id="res-guests" type="number" {...register("guests", {
            required: 'Field is required',
            validate: {
              min: val => Number(val) >= 1 || "Minimum number of guests is 1",
              max: val => Number(val) <= 10 || "Maximum number of guests is 10"
            }
          })} />
          {errors?.guests && <label className="error">{errors.guests?.message}</label>}
        </div>
        <div>
          <label htmlFor="res-occasion" className="card_title">Occasion</label>
          <Select error={errors?.occasion} id="res-occasion" data-testid="res-occasion" {...register("occasion", {required: 'Field is required'})}>
            <option value={'Birthday'}>Birthday</option>
            <option value={'Anniversary'}>Anniversary</option>
            {errors?.occasion && <label className="error">{errors.occasion?.message}</label>}
          </Select>
        </div>
        <input data-testid="form-submit" className='card_title' type="submit" value="Make Your reservation" /* disabled={!isValid} */ />
      </form>
    </section>
  )
}

export default BookingForm