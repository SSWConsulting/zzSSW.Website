import React, { useState } from "react";
import classnames from "classnames";
import { button, hoverable, anim, buttonClicked } from "./index.module.css";
import BookingFormPopup from "../bookingFormPopup";

const ToggleButton = ({title, setCurrentTab, id, currentTab}) => {
  return (
    <>
      {/* TODO: Change from hidden to grey (to let the user know that the button isn't selected) */}
      <div onClick={() => setCurrentTab(id)}>
        <button
          type="button"
          className={classnames(button, hoverable,
              currentTab !== id ? buttonClicked : ""
            )}
          >
          {title}
          <div className={classnames(anim)} />
        </button>
      </div>
    </>
  );
};

export default ToggleButton;
