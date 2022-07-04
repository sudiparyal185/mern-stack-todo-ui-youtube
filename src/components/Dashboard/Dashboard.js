import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  StyledContainer,
  StyledFormHeader,
  StyledFormContainer,
  StyledInputContainer,
} from "../Register/Register.styled";
import DashboardIcon from "@mui/icons-material/Dashboard";
import {
  getTodos,
  reset,
  addTodos,
  updateTodo,
} from "../../features/todo/todoSlice";
import Todo from "../Todo/Todo";
const Dashboard = () => {
  const { user } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [todoText, setTodoText] = useState("");
  const [updateTodoId, setUpdateTodoId] = useState("");
  const { todo } = useSelector((state) => state.todo);
  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
    dispatch(getTodos());
    return () => {
      dispatch(reset());
    };
  }, [user, navigate, dispatch]);

  const handleTodochange = (e) => {
    setTodoText(e.target.value);
  };

  //Adding the todos
  const handleSubmit = (e) => {
    e.preventDefault();
    if (updateTodoId !== "" && todoText) {
      const updateData = {
        updateTodoId,
        todoText,
      };
      dispatch(updateTodo(updateData));
      setTodoText("");
      setUpdateTodoId("");
    } else {
      dispatch(addTodos(todoText));
      setTodoText("");
    }
  };
  return (
    <>
      <StyledContainer>
        <StyledFormHeader>
          <h1>
            <DashboardIcon />
            {`Welcome ${user?.name}`}
          </h1>
          <p>Start adding todos</p>
        </StyledFormHeader>
        <StyledFormContainer>
          <form onSubmit={handleSubmit}>
            <StyledInputContainer>
              <input
                type='text'
                id='todo'
                name='todo'
                value={todoText}
                placeholder='Please add todos'
                onChange={handleTodochange}
              />
            </StyledInputContainer>
          </form>
          {todo?.map((item) => (
            <Todo
              key={item?._id}
              todo={item}
              setTodoText={setTodoText}
              setUpdateTodoId={setUpdateTodoId}
            />
          ))}
        </StyledFormContainer>
      </StyledContainer>
    </>
  );
};

export default Dashboard;
