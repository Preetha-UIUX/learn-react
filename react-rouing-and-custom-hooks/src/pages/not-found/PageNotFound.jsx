import { Link } from 'react-router-dom'

const PageNotFound = () => {
  return (
    <div>
      <h2>Oops, it looks like this page doesn’t exist.</h2>
      <Link to={'/recipe-list'}>Go to Recipe List Page</Link>
    </div>
  )
}

export default PageNotFound
