import React from "react";
import Sidemenu from "./Sidemenu";

export default function Home() {
  return (
    <div style={{ height: "100vh" }}>
      <div
        style={{
          width: "100%",
          background: "black",
          height: "60px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "white",
          fontSize: "20px",
        }}
      >
        Home
      </div>
      <div style={{ width: "100%", height: "100%" }}>
        <div
          style={{
            width: "15%",
            minWidth: "250px",
            background: "#333395",
            height: "100%",
            color: "white",
          }}
        >
          <Sidemenu />
        </div>
        <div style={{ width: "75%", height: "100%" }}></div>
      </div>
    </div>
  );
}
