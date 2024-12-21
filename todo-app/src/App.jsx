import { useEffect, useState } from "react";
import classes from "./style.module.css";
import TodoItem from "./components/todo-item/todoItem";
import TodoDetails from "./components/todo-details/TodoDetails";
import { Skeleton } from "@mui/material";

const App = () => {
  const [loading, setIsLoading] = useState(false);
  const [todoList, setTodoList] = useState([]);
  const [errorMessage, setErrorMessage] = useState(null);
  const [todoDetails, setTodoDetails] = useState(null);
  const [openDialog, setOpenDialog] = useState(false);

  const fetchListOfTodos = async () => {
    try {
      setIsLoading(true);
      const apiResponse = await fetch("https://dummyjson.com/todos");
      const result = await apiResponse.json();
      console.log(result);
      if (result?.todos && result?.todos?.length > 0) {
        setIsLoading(false);
        setTodoList(result?.todos);
        setErrorMessage("");
      } else {
        setIsLoading(true);
        setTodoList([]);
        setErrorMessage("");
      }
    } catch (error) {
      setErrorMessage(error);
    }
  };

  const fetchDetailsOfCurrentTodo = async (getCurrentId) => {
    console.log(getCurrentId);
    try {
      const apiResponse = await fetch(
        `https://dummyjson.com/todos/${getCurrentId}`
      );
      const details = await apiResponse.json();
      console.log("result", details);
      if (details) {
        setTodoDetails(details);
        setOpenDialog(true);
      } else {
        setTodoDetails(null);
        setOpenDialog(false);
      }
    } catch (error) {
      return error;
    }
  };

  useEffect(() => {
    fetchListOfTodos();
  }, []);

  if(loading) {
    return <Skeleton variant="rectangular" width={350} height={350}/>
  }

  return (
    <div className={classes.mainWrapper}>
      <h1 className={classes.headerTitle}>Todo APP using Material UI</h1>
      <div className={classes.todoListWrapper}>
        {todoList && todoList.length > 0
          ? todoList.map((todoItem) => (
              <TodoItem
                todo={todoItem}
                key={todoItem.id}
                fetchDetailsOfCurrentTodo={fetchDetailsOfCurrentTodo}
              />
            ))
          : null}
      </div>
      <TodoDetails
        openDialog={openDialog}
        todoDetails={todoDetails}
        setOpenDialog={setOpenDialog}
        setTodoDetails={setTodoDetails}
      />
    </div>
  );
};

export default App;
