import React from "react";
import { ItemType } from "../../types/type";
type Prop = {
  favitems: ItemType;
};

export default function FavList({ favitems }: Prop) {
  return (
    <div>
      <h1>favList</h1>
      <div> {favitems.title}</div>
    </div>
  );
}
