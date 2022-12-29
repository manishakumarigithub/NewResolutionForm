import { Action, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ItemType } from "../../types/type";

type initialState = {
  favItems: ItemType[];
};

const initialState: initialState = {
  favItems: [],
};

const favSlice = createSlice({
  name: "favItem",
  initialState,
  reducers: {
    favaddItem: (state, action: PayloadAction<ItemType>) => {
      //console.log(action.payload, "action.payload");

      state.favItems.push(action.payload);
    },
    //Remove: (state, action) => {
    //const formlititem = [...state.formList];
    //const findarray = state.formList.findIndex(
    //(item) => item.title === action.payload
    //);
    // state.formList.splice(findarray, 1);
    //},
  },
});
export const favReducer = favSlice.reducer;
const favactions = favSlice.actions;
export default favactions;
