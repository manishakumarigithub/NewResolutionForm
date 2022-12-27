import { configureStore } from "@reduxjs/toolkit";

import formReducer from "./Slice/form";
const Store = configureStore({
  reducer: { formItem: formReducer },
});
export type RootState = ReturnType<typeof Store.getState>;

export default Store;
