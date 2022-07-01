import React, { useEffect, useLayoutEffect, useMemo, useState } from "react";
import InnerHTML from "../../../innerHTML";

const TabHeader = ({ title, subTitle }) => {
  return (
    <>
      <div
      // className={
      //   (hasTransitionedIn && isMounted) || (!hasTransitionedIn && !isMounted)
      //     ? `${styles.headerContent}  ${
      //         hasTransitionedIn && `${styles.tn}`
      //       } ${isMounted && `${styles.visibleHeader}`}`
      //     : `${styles.headerContent} `
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
