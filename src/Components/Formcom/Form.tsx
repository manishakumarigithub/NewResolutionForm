import React from "react";
import { useState } from "react";
import { stringify } from "uuid";
import { useSelector, useDispatch } from "react-redux";
import "./Form.css";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import { ItemType } from "../../types/type";
import { actions } from "../../Redux/Slice/form";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import dayjs, { Dayjs } from "dayjs";

import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import Alert from "@mui/material/Alert";

import Snackbar from "@mui/material/Snackbar";

//let myuuid = uuidv4();

export default function Form() {
  const [open, setOpen] = useState(false);

  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const [value, setValue] = React.useState<Dayjs | null>(
    dayjs("2014-08-18T21:11:54")
  );

  const handleChange = (newValue: Dayjs | null) => {
    setValue(newValue);
  };
  const handleClick = () => {
    setOpen(true);
  };
  const disPatch = useDispatch();
  function getvalue() {
    disPatch(actions.addItem(userInput));
    handleClick();
    setuserInput({ ...userInput, title: "" });
  }
  //const getvalue = useDispatch();
  const [userInput, setuserInput] = useState<ItemType>({
    title: "",
    date: dayjs(Date.now()),
  });

  function getTitle(event: React.ChangeEvent<HTMLInputElement>) {
    setuserInput({ ...userInput, title: event.target.value });
  }
  function getDate(newValue: Dayjs | null) {
    setuserInput({ ...userInput, date: newValue });
    // console.log(newValue, "new");
  }
  // console.log(userInput, "f");
  return (
    <div>
      RESOLUTION FORM
      <div>
        <div className="container">
          <form>
            <TextField
              required
              id="filled-required"
              label="Title"
              variant="filled"
              onChange={getTitle}
              className=""
              value={userInput.title}
            />
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DesktopDatePicker
                label="Date desktop"
                inputFormat="MM/DD/YYYY"
                value={userInput.date}
                onChange={getDate}
                renderInput={(params) => <TextField {...params} />}
              />
            </LocalizationProvider>
          </form>
        </div>

        <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
          <Alert
            onClose={handleClose}
            severity="success"
            sx={{ width: "100%" }}
          >
            A Resolution is Added
          </Alert>
        </Snackbar>

        <Button variant="contained" onClick={getvalue}>
          {" "}
          add
        </Button>
      </div>
    </div>
  );
}
