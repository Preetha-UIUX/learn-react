import { useEffect, useRef } from "react"

const Hooks = () => {
   const countValue =  useRef(0);
   const getElementRef = useRef();
   const inputRefElement = useRef();

   const handleClick = () => {
    countValue.current++;
    console.log('countValue', countValue.current);
   }

   useEffect(() => {
    const getDivElement = getElementRef.current;
    inputRefElement.current.focus();
    getDivElement.style.color = 'red';
    setTimeout(() => {
        getDivElement.style.color = "green";
    }, 2000)
    console.log('getDivElement', getDivElement);
    
   }, [])
  return (
    <div>
      <h2>Use Ref, Use Callback and use Memo hook</h2>
      <button onClick={handleClick}>Click Me!</button>
      <div ref={getElementRef}>Some random text</div>
      <input name="name" placeholder="enter Name" ref={inputRefElement}/>
    </div>
  )
}

export default Hooks
