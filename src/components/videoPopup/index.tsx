import React, { useState } from "react";
import ReactPlayer from "react-player";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";

const VideoPopup = ({ openPopup, onCloseModal }) => {
  //  const onCloseModal = () => setOpen(false);
  console.log(onCloseModal);
  return (
    <div>
      <Modal
        open={openPopup}
        onClose={onCloseModal}
        styles={{
          modal: {
            maxWidth: "unset",
            width: "80%",
            padding: "unset",
          },
          overlay: {
            background: "black !important",
          },
          closeButton: {
            background: "#cc4141",
          },
        }}
        center
      >
        <ReactPlayer
          url="https://vimeo.com/400817895"
          width="100%"
          height="calc(100vh - 100px)"
          playing
          controls
        />
      </Modal>
    </div>
  );
};

export default VideoPopup;
