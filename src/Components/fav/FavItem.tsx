import React from "react";
import FavList from "./FavList";
import Store from "../../Redux/Store";
import { ItemType } from "../../types/type";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../Redux/Store";
export default function FavItem() {
  const getdata = useSelector((state: RootState) => state.favItem.favItems);
  return (
    <div>
      <div>
        {getdata.map((item) => (
          <FavList key={crypto.randomUUID()} favitems={item}></FavList>
        ))}
      </div>
    </div>
  );
}
