import React from "react";

export default function Toggle({ isLight, onClick }) {
  return (
    <div onClick={onClick} className={`toggle${isLight ? " " : " night"}`}>
      <div className="notch">
        <div className="crater" />
        <div className="crater" />
      </div>
      <div>
        <div className="shape sm" />
        <div className="shape md" />
        <div className="shape lg" />
      </div>
    </div>
  );
}
