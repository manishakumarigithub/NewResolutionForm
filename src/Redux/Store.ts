import { configureStore } from "@reduxjs/toolkit";
import { favReducer } from "./Slice/favSlice";
import formReducer from "./Slice/form";
const Store = configureStore({
  reducer: {
    formItem: formReducer,

    favItem: favReducer,
  },
});
export type RootState = ReturnType<typeof Store.getState>;

export default Store;
