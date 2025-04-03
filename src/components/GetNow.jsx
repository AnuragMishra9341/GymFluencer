import React from "react";
import { Link } from "react-router-dom";
const GetNow = () => {
  return (
    <Link to="/search">
      <button
        style={{
          backgroundColor: "white",
          border: "2px solid white",
          color: "black",
          transition: "background-color 0.2s",
          marginLeft: "280px",
          width: "100px",
          height: "35px",
          borderRadius: "4px",
          fontWeight: "bold",
          fontSize: "14px",
          marginTop: "120px",
        }}
        onMouseDown={(e) => (e.target.style.backgroundColor = "grey")}
        onMouseUp={(e) => (e.target.style.backgroundColor = "white")}
      >
        Get started
      </button>
    </Link>
  );
};

export default GetNow;
