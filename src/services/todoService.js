import axios from "axios";
import { BASE_URL } from "../utils";

const getTodos = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.get(`${BASE_URL}/rest/todos/`, config);
  return response.data;
};

const addTodos = async (todo, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const bodyData = {
    todo: todo,
  };
  const response = await axios.post(
    `${BASE_URL}/rest/todos/`,
    bodyData,
    config
  );
  return response.data;
};

const deleteTodo = async (id, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.delete(`${BASE_URL}/rest/todos/${id}`, config);
  return response.data;
};

const todoService = {
  getTodos,
  addTodos,
  deleteTodo,
};

export default todoService;
