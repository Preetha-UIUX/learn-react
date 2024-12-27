// import { Link, Route, Routes, useNavigate, useRoutes } from "react-router-dom";
import { Link, useNavigate, useRoutes } from "react-router-dom";
import RecipeList from "./pages/recipes/RecipeList";
import CommentList from "./pages/comments/CommentList";
import RecipeDetailsPage from "./pages/recipe-details/RecipeDetailsPage";
import PageNotFound from "./pages/not-found/PageNotFound";
import Layout from "./components/layout/Layout";
import ReactHookForm from "./pages/reactHookForm/ReactHookForm";
import Hooks from "./pages/hooks/Hooks";
import MemoExample from "./pages/useMemoHook/MemoExample";
import CallbackExample from "./pages/useCallbackHook/CallbackExample";

function CustomRoute() {
  const element = useRoutes([
    {
      path: '/home',
      element: <Layout />,
      children: [
        {
          path: 'recipe-list',
          element: <RecipeList />
        },
        {
          path: 'comments-list',
          element: <CommentList/>
        },
        {
          path: 'recipe-list/:id',
          element: <RecipeDetailsPage/>
        }
      ]
    },
    {
      path: '*',
      element: <PageNotFound />
    },
    {
      path: 'react-hook-form',
      element: <ReactHookForm />
    },
    {
      path: 'react-hook',
      element: <Hooks />
    },
    {
      path: 'react-use-memo',
      element: <MemoExample />
    },
    {
      path: 'react-callback',
      element: <CallbackExample />
    }
  ])
  return element;
}

function App() {
  const navigate = useNavigate();

  return (
    <div>
      <h1>React routing and Custom hooks</h1>
      {/* <div>
        <Link to={'home/recipe-list'}>Alternate way to navigate</Link>
      </div>
      <button 
        style={{ background: "#2d2d2d", color: "#fff" }}
        onClick={() => navigate('home/recipe-list')}
      >
        View Recipe
      </button>
      <button 
        style={{ background: "#2d2d2d", color: "#fff" }}
        onClick={() => navigate('home/comments-list')}  
      >
        View Comments
      </button> */}
      {/* <Routes>
        <Route path="/home" element={<Layout/>}>
          <Route path="recipe-list" element={<RecipeList />} />
          <Route path="comments-list" element={<CommentList />} />
          <Route path="recipe-list/:id" element={<RecipeDetailsPage/>}/>
        </Route>
        <Route path="*" element={<PageNotFound/>}/>
      </Routes> */}
      <CustomRoute />
    </div>
  );
}

export default App;
