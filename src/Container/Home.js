import React from "react";
import { useSelector } from "react-redux";
function Home() {
  const switchValue = useSelector((state) => state.theme.active);
  console.log(switchValue);
  return (
    <div
      style={{
        height: "90vh",
        backgroundColor: switchValue ? "black" : "white",
        color: switchValue ? "white" : "black",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <h1>Hello World</h1>
    </div>
  );
}

export default Home;
