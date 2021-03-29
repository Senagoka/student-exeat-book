import React from "react";

function Header({ showform, toggle }) {
  return (
    <div className="header">
      <h1>Students Exeat Book</h1>
      <button
        style={{ background: `${toggle ? "red" : "green"}`, }}
        onClick={showform}
      >
        {toggle ? "CLOSE" : "ADD EXEAT"}
      </button>
    </div>
  );
}

export default Header;
