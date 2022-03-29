import React from "react";
import ReactPlayer from "react-player";
import { Modal } from "react-responsive-modal";
import "react-responsive-modal/styles.css";
import BookingForm from "../bookingForm";
import "./index.css";

const BookingFormPopup = ({ openPopup, onCloseModal }) => {
  console.log("popup", openPopup);
  console.log(onCloseModal);
  return (
    <div>
      <Modal
        open={openPopup}
        onClose={onCloseModal}
        styles={{
          modal: {
            maxWidth: "unset",
            width: "600px",
            padding: "unset",
            background: "#000",
            boxShadow: "0 0 10px 0 rgba(0,0,0,0.7)",
            borderRadius: "2px",
          },
        }}
        showCloseIcon={false}
        classNames={{
          modalAnimationIn: "customEnterModalAnimation",
          modalAnimationOut: "customLeaveModalAnimation",
        }}
        animationDuration={500}
      >
        <BookingForm />
      </Modal>
    </div>
  );
};

export default BookingFormPopup;
