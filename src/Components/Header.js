import React from "react";
import { darkOff, darkOn } from "../Store/changeThemeReducer";
import { useDispatch, useSelector } from "react-redux";

export default function Header() {
  const dispatch = useDispatch();
  const switchValue = useSelector((state) => state.theme.active);
  function toggleSwitchHandler() {
    if (switchValue === true) {
      dispatch(darkOff());
    } else {
      dispatch(darkOn());
    }
  }
  return (
    <div
      style={{
        height: "10vh",
        backgroundColor: switchValue ? "white" : "black",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <button onClick={toggleSwitchHandler}>
        {switchValue ? "Light Mode" : "Dark Mode"}
      </button>
    </div>
  );
}
