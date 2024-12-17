import { useState } from 'react'
import ProductItem from './components/product-item'
import './style.css'
import { useEffect } from 'react'

const ProductList = ({ listOfProducts, name , city }) => {
  const [flag, setFlag] = useState(false);
  const [count, setCount] = useState(0);
  const [colorChange, setColorChange] = useState(false);

  const handleToggle = () => {
    setFlag(!flag);
  }

  const handleIncreaseClick = () => {
    setCount(count + 1);
  }

  useEffect(() => {
    setFlag(!flag)
    console.log("Run only once on page load")
  }, []);

  useEffect(() => {
    if(count === 10) {
      setColorChange(true);
    }
  }, [count])

  return (
    <div>
      <button onClick={handleToggle}>Toggle Text</button>
      {flag ? (
        <h4>{name} and {city}</h4>
      ) : (
        <h4>Hello</h4>
      )}
      <button style={{backgroundColor: colorChange ? 'black' : 'white', color: colorChange ? 'white' : 'black' }} onClick={handleIncreaseClick}>Increament</button>
      <p>Count {count}</p>
      <h3 className='title'>Ecommerce Project</h3>
      <ul>
        {listOfProducts.map((item, index) => (
            // <li key={index}>{item}</li>
            <ProductItem singleProductItem={item} key={index}/>
        ))}
      </ul>
    </div>
  )
}

export default ProductList
