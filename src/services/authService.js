import axios from "axios";
import { BASE_URL } from "../utils";


const register = async (userData) => {
  const response = await axios.post(
    `${BASE_URL}/rest/users/register`,
    userData
  );
  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }
  return response.data;
};

const login = async (userData) => {
  const response = await axios.post(`${BASE_URL}/rest/users/login`, userData);
  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }
  return response.data;
};

const logout = () => {
  localStorage.removeItem("user");
};

const authService = {
  register,
  logout,
  login,
};

export default authService;
