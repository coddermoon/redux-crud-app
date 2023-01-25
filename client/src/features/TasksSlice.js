import { createSlice } from "@reduxjs/toolkit";
// initial states

const initialTasks = {
  tasks: [
    {
      id: 1,
      name: "abul Hasan",
      email: "abul@gmail.com",
      hobby: "coding",
      phone: "+8801771517322",
    },
  ],
};

// create a slice for task

export const taskSlice = createSlice({
  name: "task",
  initialState: initialTasks,
  reducers: {
    showTask: (state) => state,
    addTask: (state, action) => {
      state.tasks.push(action.payload);
    },

    // update tasks

    updateTask: (state, action) => {
      const { id, name, email, phone, hobby } = action.payload;

      const isExits = state.tasks.filter((task) => task.id === id);

      if (isExits) {
        isExits[0].name = name;
        isExits[0].email = email;
        isExits[0].phone = phone;
        isExits[0].hobby = hobby;
      }
    },
    // delete task
    deleteTask: (state, action) => {
      const id = action.payload;

      state.tasks = state.tasks.filter((task) => task.id !== id);
    },
  },
});

// return actions

export const { showTask, addTask, deleteTask, updateTask } = taskSlice.actions;
export default taskSlice.reducer;
