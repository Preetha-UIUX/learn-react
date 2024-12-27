import { memo } from "react";

const Counter = ({ countValue, onClick }) => {
    console.log('this is rendered', countValue, onClick);
    
  return (
    <div>
      <h3>{countValue}</h3>
      <button onClick={onClick}>Click Me</button>
    </div>
  )
}

export default memo(Counter)
