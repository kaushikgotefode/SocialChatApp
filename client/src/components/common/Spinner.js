import React from "react";
import spinner from "./spinner.gif";
export default function Spinner() {
  return (
    <div className="w-100">
      <img
        src={spinner}
        alt="Loading..."
        style={{ width: "50px", margin: "auto", display: "block" }}
      />
    </div>
  );
}
