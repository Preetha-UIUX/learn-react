import { useContext } from "react";
import { GlobalContext } from "../../context";

const ChangeTextComponent = () => {
    const {theme} = useContext(GlobalContext)

  return (
    <h3 
    style={{
        fontSize: theme === 'light' ? '50px' : '100px',
        backgroundColor: theme === 'light' ? '#fff' : '#000',
        color: theme === 'light' ? 'blue' : 'yellow'
    }}
    >
      Preetha
    </h3>
  )
}

export default ChangeTextComponent;
