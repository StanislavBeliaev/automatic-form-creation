import React from "react";
import { Link } from "react-router-dom";

export const MainPage = () => {
  return (
    <div>
      <Link to="/form">
        <button>Form</button>
      </Link>
    </div>
  );
};
