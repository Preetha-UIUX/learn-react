import { useContext } from "react";
import { GlobalContext } from "../../context";

const ChangeButtonComponent = () => {
    // const { theme, setTheme } = useContext(GlobalContext);
    const { handleChangeTheme } = useContext(GlobalContext);

  return (
    // <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
    //   Change Theme
    // </button>
    <button onClick={handleChangeTheme}>
        Change Theme
    </button>
  )
}

export default ChangeButtonComponent;
