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

import { v4 as uuid } from "uuid";

import { v4 as uuidv4 } from "uuid";

//let myuuid = uuidv4();

export default function Form() {
  const getvalue = useDispatch();
  const [userInput, setuserInput] = useState<ItemType>({ Title: "", Date: "" });

  function getTitle(event: React.ChangeEvent<HTMLInputElement>) {
    setuserInput({ ...userInput, Title: event.target.value });
  }
  function getDate(event: React.ChangeEvent<HTMLInputElement>) {
    setuserInput({ ...userInput, Date: event.target.value });
  }
  // console.log(userInput, "f");
  return (
    <div>
      RESOLUTION FORM
      <div>
        <div className="container">
          <form>
            {/*<input type="text" onChange={getTitle}></input>
          <label>Date </label>*/}
            <TextField
              required
              id="filled-required"
              label="Title"
              variant="filled"
              onChange={getTitle}
              className=""
            />

            {/*<input type="date" onChange={getDate}></input>*/}

            <TextField
              id="datetime-local"
              onChange={getDate}
              label="Next appointment"
              type="datetime-local"
              defaultValue="2017-05-24T10:30"
              sx={{ width: 250 }}
              InputLabelProps={{
                shrink: true,
              }}
            />
          </form>
        </div>
        <Button
          variant="contained"
          onClick={() => {
            getvalue(actions.addItem(userInput));
          }}
        >
          {" "}
          add
        </Button>
        {/*<button
          onClick={() => {
            getvalue(actions.addItem(userInput));
          }}
        >
          Add{" "}
        </button>*/}
      </div>
    </div>
  );
}
