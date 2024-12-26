
import useFetch from '../../hooks/useFetch';

const CommentList = () => {

  const { data, loading, error } = useFetch('https://dummyjson.com/comments');
  console.log('data', data);
  if(loading) return (<h3>Fetching comments! Please Wait...</h3>)
  return (
    <div>
      <h1>Comments List Page</h1>
      <ul>
        {
          data?.comments?.length > 0 ? (
            data.comments.map((commentItems) => (
              <div key={commentItems.id} style={{display: 'flex', alignItems: 'center', gap: '30px', border: '1px solid black', margin: '10px', padding: '10px'}}>
                <label>{commentItems.body}</label>
                <p>Likes: {commentItems.likes}</p>
              </div>
            ))
          ) : null
        }
      </ul>
    </div>
  )
}

export default CommentList
