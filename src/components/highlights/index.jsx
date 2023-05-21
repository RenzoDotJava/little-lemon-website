import Button from "../button"
import MenuCard from "../menu-card"
import greekSalad from '../../assets/greek_salad.jpg'
import bruchetta from '../../assets/bruchetta.png'
import lemonDessert from '../../assets/lemon_dessert.jpg'
import "./Highlights.css"

const menu = [
  {
    src: greekSalad,
    name: "Greek Salad",
    price: "$ 12.99",
    description: "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons"
  },
  {
    src: bruchetta,
    name: "Bruchetta",
    price: "$ 15.99",
    description: "Our Bruchetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil."
  },
  {
    src: lemonDessert,
    name: "Lemon Desert",
    price: "$ 5.00",
    description: "This come straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined"
  }
]

const Highlights = () => {
  return (
    <section id="highlights" className="highlights">
      <div>
        <h1 className="display_title">This weeks specials!</h1>
        <div>
          <Button text="Online Menu" />
        </div>
      </div>
      <div>
        {menu.map((item, index) => (
          <MenuCard
            key={index}
            src={item.src}
            name={item.name}
            price={item.price}
            description={item.description}
          />
        ))}
      </div>
    </section>
  )
}

export default Highlights