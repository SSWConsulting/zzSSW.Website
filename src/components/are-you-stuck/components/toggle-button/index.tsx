import React from "react";
import classnames from "classnames";
import { button, hoverable, anim, buttonClicked } from "./index.module.css";

const ToggleButton = ({
  title,
  setCurrentTab,
  id,
  currentTab,
  isMounted,
  toggle,
}) => {
  return (
    <>
      {/* TODO: Change from hidden to grey (to let the user know that the button isn't selected) */}
      <div>
        <button
          onClick={() => {
            setCurrentTab(id);
            toggle(!isMounted);
          }}
          type="button"
          disabled={currentTab === id ? true : false}
          className={classnames(
            button,
            hoverable,
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
