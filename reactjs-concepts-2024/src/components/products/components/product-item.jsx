import styles from './product-item.module.css';

function ButtomComponent() {
    console.log(styles)
    return <button className={styles.buttonStyle} type='button'>Click</button>
}

const ProductItem = ({ singleProductItem, key }) => {
  return (
    <div
        style={{ padding: '20px', border: '2px solid red', marginBottom: '10px'}} 
        key={key}
    >
      <p className={styles.productTitle}>{singleProductItem}</p>
      <ButtomComponent />
    </div>
  )
}

export default ProductItem
