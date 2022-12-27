import React from "react";
import { useState } from "react";
import { stringify } from "uuid";
import { useSelector, useDispatch } from "react-redux";
import { actions } from "../../Redux/Slice/form";

import { v4 as uuid } from "uuid";
//import { v4 as uuidv4 } from "uuid";

//let myuuid = uuidv4();

export default function Form() {
  const getvalue = useDispatch();
  const [userInput, setuserInput] = useState({ Title: "", Date: "" });

  function getTitle(event: React.ChangeEvent<HTMLInputElement>) {
    setuserInput({ ...userInput, Title: event.target.value });
  }
  function getDate(event: React.ChangeEvent<HTMLInputElement>) {
    setuserInput({ ...userInput, Date: event.target.value });
  }
  // console.log(userInput, "f");
  return (
    <div>
      Form
      <div>
        <form>
          <label>Title </label>
          <input type="text" onChange={getTitle}></input>
          <label>Date </label>
          <input type="date" onChange={getDate}></input>
        </form>
        <button
          onClick={() => {
            getvalue(actions.addItem(userInput));
          }}
        >
          Add{" "}
        </button>
      </div>
    </div>
  );
}
