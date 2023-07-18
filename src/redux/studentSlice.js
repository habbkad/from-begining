import { createSlice } from "@reduxjs/toolkit";

export const studentSlice = createSlice({
  name: "counter",
  initialState: {
    students: [{ name: "Habib", gen: "53", id: "hsjkdggsud65234" }],
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
    deleteStudent: () => {},
  },
});

// Action creators are generated for each case reducer function
export const { addStudent, deleteStudent, editStudent } = studentSlice.actions;

export default studentSlice.reducer;
