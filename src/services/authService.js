import axios from "axios";

const BASE_URL = "http://localhost:3005";

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

const authService = {
  register,
};

export default authService;
