import React, { useState } from "react";
import { ItemType } from "../../types/type";
import "./FormListitem.css";
import Button from "@mui/material/Button";
import { useSelector, useDispatch } from "react-redux";
import { actions } from "../../Redux/Slice/form";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";
import favactions from "../../Redux/Slice/favSlice";

import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

type Prop = {
  item: ItemType;
  itemId: string;
};
export default function FormlistItem({ item, itemId }: Prop) {
  const RemoveItemHandler = useDispatch();

  const favDispatch = useDispatch();
  function favData() {
    favDispatch(favactions.favaddItem(item));
  }

  return (
    <div className="box">
      <div> Title:{item.title}</div>
      Date:{item.date?.toDate().toLocaleDateString()}
      {}
      <div>
        <IconButton
          aria-label="delete"
          size="large"
          onClick={() => RemoveItemHandler(actions.Remove(item))}
        >
          <DeleteIcon fontSize="inherit" />
        </IconButton>
        {/*<button onClick={() => RemoveItemHandler(actions.Remove(item.Title))}>
          Remove
  </button>*/}
        <Button onClick={favData}> add to Fav</Button>
      </div>
    </div>
  );
}
