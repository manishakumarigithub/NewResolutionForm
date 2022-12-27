import React from "react";
import Store from "../../Redux/Store";
import { RootState } from "../../Redux/Store";
import { useSelector } from "react-redux/es/exports";
import FormlistItem from "./FormlistItem";
import { v4 as uuid } from "uuid";
export default function Formlist() {
  const formValue = useSelector((state: RootState) => state.formItem.formList);
  return (
    <div>
      <div>
        Formlist:
        {formValue.map((item, index) => (
          <FormlistItem item={item} key={uuid()} />
        ))}
      </div>
    </div>
  );
}