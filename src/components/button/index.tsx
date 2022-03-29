import React, { useState } from "react";
import classnames from "classnames";
import { button, hoverable, anim } from "./index.module.css";
import BookingFormPopup from "../bookingFormPopup";

const Button = ({ children, ...props }) => {
  const [openPopup, setOpenPopup] = useState(false);
  console.log("INDEX", openPopup);
  const onOpenModal = () => setOpenPopup(!openPopup);

  return (
    <>
      <button
        onClick={onOpenModal}
        type="button"
        className={classnames(button, hoverable)}
        {...props}
      >
        {children}
        <div className={anim} />
      </button>
      <BookingFormPopup openPopup={openPopup} onCloseModal={onOpenModal} />
    </>
  );
};

export default Button;
