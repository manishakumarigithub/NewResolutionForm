import React from "react";
import { ItemType } from "../../types/type";
import { v4 as uuid } from "uuid";
import { useSelector, useDispatch } from "react-redux";
import { actions } from "../../Redux/Slice/form";
type Prop = {
  item: ItemType;
};
export default function FormlistItem({ item }: Prop) {
  const RemoveItemHandler = useDispatch();
  return (
    <div>
      FormlistItem
      <div>{item.Title}</div>
      {item.Date}
      <div>
        <button onClick={() => RemoveItemHandler(actions.Remove(item.Date))}>
          Remove
        </button>
      </div>
    </div>
  );
}
