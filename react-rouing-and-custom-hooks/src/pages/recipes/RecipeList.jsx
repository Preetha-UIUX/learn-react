import { useLocation } from "react-router-dom"

const RecipeList = () => {
  const location = useLocation();
  console.log('location',location);
  return (
    <div>
      <h1>Recipe List</h1>
    </div>
  )
}

export default RecipeList
