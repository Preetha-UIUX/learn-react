// import { useLocation } from "react-router-dom"
import useFetch from "../../hooks/useFetch";

const RecipeList = () => {
  // const location = useLocation();
  // console.log('location',location);

  const {data, loading, error} = useFetch('https://dummyjson.com/recipes');
  console.log('data',data);

  if (loading) return (<h3>Fetching recipes! Please Wait...</h3>)
  
  return (
    <div>
      <h1>Recipe List</h1>
      <ul style={{display: 'flex', flexWrap: 'wrap', gap: '20px'}}>
        {
          data?.recipes?.length > 0 ? (
            data.recipes.map((recipeItems) => (
              <div key={recipeItems.id} style={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px', border: '1px solid black', margin: '10px', padding: '10px'}}>
                <img src={recipeItems.image} alt={recipeItems.name} width="300px" />
                <h3>{recipeItems.name}</h3>
              </div>
            ))
          ) : null
        }
      </ul>
    </div>
  )
}

export default RecipeList
