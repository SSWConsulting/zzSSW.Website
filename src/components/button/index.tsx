import React, { useState } from "react";
import classnames from "classnames";
import { button, hoverable, anim } from "./index.module.css";
import BookingFormPopup from "../bookingFormPopup";
import * as styles from "./index.module.css";

const Button = ({ children, ...props }) => {
  return (
    <>
      <button
        type="button"
        className={classnames(button, hoverable)}
        {...props}
      >
        {children}
        <div className={anim} />
      </button>
    </>
  );
};

export default Button;
