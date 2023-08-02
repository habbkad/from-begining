import { createSlice } from "@reduxjs/toolkit";

export const studentSlice = createSlice({
  name: "counter",
  initialState: {
    students: [],
  },
  reducers: {
    addStudent: (state, action) => {
      state.students = [...state.students, action.payload];
    },
    editStudent: (state, action) => {
      const newArr = state.students.map((item) => {
        if (item.id === action.payload.id) {
          return action.payload;
        }
        return item;
      });

      state.students = newArr;
    },
    deleteStudent: (state, action) => {
      const newArr = state.students.filter(
        (item) => item.id !== action.payload
      );
      state.students = newArr;
    },
  },
});

// Action creators are generated for each case reducer function
export const { addStudent, deleteStudent, editStudent } = studentSlice.actions;

export default studentSlice.reducer;
