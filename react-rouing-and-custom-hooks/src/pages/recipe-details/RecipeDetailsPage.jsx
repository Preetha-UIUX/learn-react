import { useParams } from "react-router-dom"

const RecipeDetailsPage = () => {
  const params = useParams();
  console.log('Param', params);
  return (
    <div>
      Recipe details page
    </div>
  )
}

export default RecipeDetailsPage
