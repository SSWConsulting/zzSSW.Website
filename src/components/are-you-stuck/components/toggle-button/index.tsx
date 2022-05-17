import React, { useState } from "react";
import classnames from "classnames";
import { button, hoverable, anim } from "./index.module.css";
import BookingFormPopup from "../bookingFormPopup";

const ToggleButton = ({ display, title, setCurrentTab, id}) => {
  return (
    <>
      {/* TODO: Change from hidden to grey (to let the user know that the button isn't selected) */}
      <div onClick={() => setCurrentTab(id)}>
        <button
          type="button"
          className={classnames(button, hoverable)}
          >
          {title}
          <div className={anim} />
        </button>
      </div>
    </>
  );
};

export default ToggleButton;
