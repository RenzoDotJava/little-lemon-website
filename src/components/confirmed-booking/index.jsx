import {useEffect} from "react";
import {useLocation, useNavigate} from "react-router-dom"
import Button from "../button";
import "./ConfirmedBooking.css"

const ConfirmedBooking = () => {
  const navigate = useNavigate();
  const {state} = useLocation()

  useEffect(() => {
    if (!state?.form) navigate('/booking')
  }, [])

  return (
    <section className="confirmed">
      <div>
        <h1 className="display_title">Booking confirmed!</h1>
        <div>
          <h2 className="lead_text">Date: </h2>
          <h2 className="lead_text">{state?.form.date}</h2>
          <h2 className="lead_text">Time: </h2>
          <h2 className="lead_text">{state?.form.time}</h2>
          <h2 className="lead_text">Number of guests: </h2>
          <h2 className="lead_text">{state?.form.guests}</h2>
          <h2 className="lead_text">Occasion: </h2>
          <h2 className="lead_text">{state?.form.occasion}</h2>
        </div>
        <Button text="Perfect!"/>
      </div>
    </section>
  )
}

export default ConfirmedBooking