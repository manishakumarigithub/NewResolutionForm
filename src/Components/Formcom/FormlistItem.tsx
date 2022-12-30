import React, { useState } from "react";
import { ItemType } from "../../types/type";
import "./FormListitem.css";
import Button from "@mui/material/Button";
import { useSelector, useDispatch } from "react-redux";
import { actions } from "../../Redux/Slice/form";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";
import favactions from "../../Redux/Slice/favSlice";
import { RootState } from "../../Redux/Store";
import MuiAlert, { AlertProps } from "@mui/material/Alert";
import Snackbar from "@mui/material/Snackbar";

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref
) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

type Prop = {
  item: ItemType;
};
export default function FormlistItem({ item }: Prop) {
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
  };
  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const favDispatch = useDispatch();
  const RemoveItemHandler = useDispatch();

  const [isValid, setisValid] = useState(false);
  const favState = useSelector((state: RootState) => state.favItem.favItems);
  function validateItem() {
    const isDuplicate = favState.some(
      (favitems) =>
        favitems.title.toLocaleLowerCase() === item.title.toLocaleLowerCase()
    );
    if (isDuplicate) {
      setisValid(false);
      setOpen(true);
      return;
    }

    setisValid(true);
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

        <Button onClick={validateItem}> add to Fav</Button>
        {!isValid && (
          <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
            <Alert
              onClose={handleClose}
              severity="error"
              sx={{ width: "100%" }}
            >
              item is already added
            </Alert>
          </Snackbar>
        )}
      </div>
    </div>
  );
}
