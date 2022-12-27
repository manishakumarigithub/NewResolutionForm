import { createSlice } from "@reduxjs/toolkit";
import { ItemType } from "../../types/type";

type initialState = {
  formList: ItemType[];
};

const initialState: initialState = {
  formList: [],
};

const formSlice = createSlice({
  name: "formItem",
  initialState,
  reducers: {
    addItem: (state, action) => {
      //console.log(action.payload, "action.payload");

      state.formList.push(action.payload);
    },
    Remove: (state, action) => {
      //const formlititem = [...state.formList];
      const findarray = state.formList.findIndex(
        (item) => item.Title === action.payload
      );
      state.formList.splice(findarray, 1);
    },
  },
});
export const actions = formSlice.actions;
const formReducer = formSlice.reducer;
export default formReducer;
