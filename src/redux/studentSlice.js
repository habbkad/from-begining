import { createSlice } from "@reduxjs/toolkit";

export const studentSlice = createSlice({
  name: "counter",
  initialState: {
    students: [{ name: "Habib", gen: 53 }],
  },
  reducers: {
    addStudent: (state, action) => {
      state.students = [...state.students, action.payload];
    },
    updateStudent: () => {},
    editStudent: () => {},
  },
});

// Action creators are generated for each case reducer function
export const { addStudent, updateStudent, editStudent } = studentSlice.actions;

export default studentSlice.reducer;
