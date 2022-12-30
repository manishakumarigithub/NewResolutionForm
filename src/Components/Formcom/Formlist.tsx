import React from "react";

import Store from "../../Redux/Store";
import { RootState } from "../../Redux/Store";
import { useSelector } from "react-redux/es/exports";
import FormlistItem from "./FormlistItem";
import { v4 as uuid } from "uuid";
const formId = uuid();
export default function Formlist() {
  const formValue = useSelector((state: RootState) => state.formItem.formList);
  return (
    <div>
      <div>
        RESOLUTION LIST
        {formValue.map((item) => (
          <FormlistItem item={item} key={crypto.randomUUID()} />
        ))}
      </div>
    </div>
  );
}
