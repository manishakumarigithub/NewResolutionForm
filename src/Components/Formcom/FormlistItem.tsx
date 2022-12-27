import React from "react";
import { ItemType } from "../../types/type";
import "./FormListitem.css";
import { v4 as uuid } from "uuid";
import { useSelector, useDispatch } from "react-redux";
import { actions } from "../../Redux/Slice/form";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";
type Prop = {
  item: ItemType;
};
export default function FormlistItem({ item }: Prop) {
  const RemoveItemHandler = useDispatch();
  return (
    <div className="box">
      <div> Title:{item.Title}</div>
      Date:{item.Date}
      <div>
        <IconButton
          aria-label="delete"
          size="large"
          onClick={() => RemoveItemHandler(actions.Remove(item.Title))}
        >
          <DeleteIcon fontSize="inherit" />
        </IconButton>
        {/*<button onClick={() => RemoveItemHandler(actions.Remove(item.Title))}>
          Remove
  </button>*/}
      </div>
    </div>
  );
}
