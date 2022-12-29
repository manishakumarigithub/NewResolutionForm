import { Action, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ItemType } from "../../types/type";

type initialState = {
  formList: ItemType[];
  favItem: ItemType[];
};

const initialState: initialState = {
  formList: [],
  favItem: [],
};

const formSlice = createSlice({
  name: "formItem",
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<ItemType>) => {
      //console.log(action.payload, "action.payload");

      state.formList.push(action.payload);
    },
    Remove: (state, action) => {
      //const formlititem = [...state.formList];
      //const findarray = state.formList.findIndex(
      //(item) => item.title === action.payload
      //);
      // state.formList.splice(findarray, 1);

      const result = state.formList.filter(
        (item) => item.title !== action.payload.title
      );

      state.formList = result;
    },
  },
});
export const actions = formSlice.actions;
const formReducer = formSlice.reducer;
export default formReducer;
