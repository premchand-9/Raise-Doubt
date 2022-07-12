import { fetchdoubts } from "../api/index";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
export const fetchdoubtsas = createAsyncThunk("fetchdoubtsas", async (data) => {
  const res = await fetchdoubts(data);
  return res.data.message;
});
const initialState = {
  assistant: {},
  student: {},
  assistantvalue: 0,
  studentvalue: 0,
};
const slice = createSlice({
  name: "demo",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchdoubtsas.fulfilled, (state, action) => {
      let type = sessionStorage.getItem("type");
      if (type === "Student") {
        state.student.doubts = action.payload;
        state.studentvalue += 1;
      }
      if (type === "Teaching Assistants") {
        state.assistant.doubts = action.payload;
        state.assistant.filterdoubts = action.payload.filter(
          (doubt) => doubt.answered === false
        );
        state.assistantvalue += 1;
      }
    });
  },
});

export default slice.reducer;
