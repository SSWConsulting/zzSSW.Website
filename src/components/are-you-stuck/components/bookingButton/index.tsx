import React, { useState } from "react";
import classnames from "classnames";
import { button, hoverable, anim, buttonAnim } from "./index.module.css";

const BookingButton = ({ children, ...props }) => {
  return (
    <>
      <button
        type="button"
        className={classnames(button, hoverable, buttonAnim)}
        {...props}
      >
        {children}
        <div className={anim} />
      </button>
    </>
  );
};

export default BookingButton;
