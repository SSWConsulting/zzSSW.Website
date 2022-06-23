import React, { useEffect, useLayoutEffect, useMemo, useState } from "react";
import InnerHTML from "../../../innerHTML";
import "./index.css";

const TabHeader = ({ title, subTitle, hasTransitionedIn, isMounted }) => {
  return (
    <>
      <div
      // className={
      //   (hasTransitionedIn && isMounted) || (!hasTransitionedIn && !isMounted)
      //     ? `headerContent  ${hasTransitionedIn && "tn"} ${
      //         isMounted && "visibleHeader"
      //       }`
      //     : `headerContent`
      // }
      >
        {/* title + subtitle component */}
        <InnerHTML tagName="h1" __html={title} />

        <h2 className={"subTitle"}>{subTitle}</h2>
      </div>
    </>
  );
};

export default TabHeader;
