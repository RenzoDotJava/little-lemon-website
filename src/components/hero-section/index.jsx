import restaurantFood from '../../assets/restauranfood.jpg'
import Button from '../button'
import "./HeroSection.css"

const HeroSection = () => {
  return (
    <section id="hero" className='hero'>
      <div>
        <h1 className='display_title'>Little Lemon</h1>
        <h2 className='subtitle'>Chicago</h2>
        <p className='lead_text'>
          We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist
        </p>
        <Button text="Reserve a table"/>
      </div>
      <img
        src={restaurantFood}
      />
    </section>
  )
}

export default HeroSection