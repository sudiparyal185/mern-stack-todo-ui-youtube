import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import todoService from "../../services/todoService";
const initialState = {
  todo: [],
  isLoading: false,
  isSuccess: false,
  isError: false,
  message: "",
};

//Get list of todos
export const getTodos = createAsyncThunk(
  "todos/getTodos",
  async (_, thunkAPI) => {
    try {
      return await todoService.getTodos(thunkAPI.getState().user.user.token);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

//Create todos
export const addTodos = createAsyncThunk(
  "todos/addtodos",
  async (todo, thunkAPI) => {
    try {
      return await todoService.addTodos(
        todo,
        thunkAPI.getState().user.user.token
      );
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

//Delete todo
export const deleteTodo = createAsyncThunk(
    "todos/deleteTodo",
    async (id, thunkAPI) => {
      try {
        return await todoService.deleteTodo(
            id,
          thunkAPI.getState().user.user.token
        );
      } catch (error) {
        const message =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();
        return thunkAPI.rejectWithValue(message);
      }
    }
  );

  //Update todo
export const updateTodo = createAsyncThunk(
    "todos/updateTodo",
    async (updatedData, thunkAPI) => {
      try {
        return await todoService.updateTodo(
            updatedData,
          thunkAPI.getState().user.user.token
        );
      } catch (error) {
        const message =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();
        return thunkAPI.rejectWithValue(message);
      }
    }
  );

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    reset: (state) => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getTodos.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getTodos.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.todo = action.payload;
      })
      .addCase(getTodos.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(addTodos.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(addTodos.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.todo.push(action.payload);
      })
      .addCase(addTodos.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(deleteTodo.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteTodo.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.todo = state.todo.filter(
          (item) => item._id !== action.payload.id
        );
      })
      .addCase(deleteTodo.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(updateTodo.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateTodo.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.todo = state.todo.map((item) => item._id === action.payload._id ? action.payload : item)
      })
      .addCase(updateTodo.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      });
  },
});

export const { reset } = todoSlice.actions;
export default todoSlice.reducer;
