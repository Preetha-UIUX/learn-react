import { useCallback, useState } from "react"
import Counter from "./counter";

const CallbackExample = () => {
    const [countOne, setCountOne] = useState(0);
    const [countTwo, setCountTwo] = useState(0);

    const memorizeCountOne = useCallback(() => setCountOne(countOne + 1), [countOne]) 
    const memorizeCountTwo = useCallback(() => setCountTwo(countTwo + 1), [countTwo]) 

  return (
    <div>
      <Counter countValue={countOne} onClick={memorizeCountOne}/>
      <Counter countValue={countTwo} onClick={memorizeCountTwo}/>
    </div>
  )
}

export default CallbackExample
