import React, { useState } from "react";
import classnames from "classnames";
import { button, hoverable, anim } from "./index.module.css";
import BookingFormPopup from "../bookingFormPopup";

const ToggleButton = ({ display, title, setCurrentTab, id}) => {
  return (
    <>
      <button
        type="button"
        className={classnames(button, hoverable)}
      >
 {/* TODO: Change from hidden to grey (to let the user know that the button isn't selected) */}
        <div onClick={() => setCurrentTab(id)} hidden={display}>
          {title}
        </div>
        <div className={anim} />
      </button>
    </>
  );
};

export default ToggleButton;
