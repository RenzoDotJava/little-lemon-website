import deliveryDining from '../../assets/delivery_dining.svg'
import "./MenuCard.css"

const MenuCard = ({src, name, price, description}) => {
  return (
    <div className='card'>
      <img
        src={src}
      />
      <div className='card_content'>
        <div>
          <h6 className='card_title'>{name}</h6>
          <h6 className='card_title'>{price}</h6>
        </div>
        <p className='paragraph_text'>
          {description}
        </p>
        <div>
          <h6 className='highlight_text'>Order a delivery</h6>
          <img src={deliveryDining} />
        </div>
      </div>
    </div>
  )
}

export default MenuCard