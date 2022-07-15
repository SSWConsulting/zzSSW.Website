import React, { useEffect, useLayoutEffect, useMemo, useState } from "react";
import InnerHTML from "../../../innerHTML";

const TabHeader = ({ title, subTitle }) => {
  return (
    <>
      <div

      //TODO: Enable animations in heading in future

      // className={
      //   (hasTransitionedIn && isMounted) || (!hasTransitionedIn && !isMounted)
      //     ? `${styles.headerContent}  ${
      //         hasTransitionedIn && `${styles.tn}`
      //       } ${isMounted && `${styles.visibleHeader}`}`
      //     : `${styles.headerContent} `
      // }
      >
        <InnerHTML tagName="h1" __html={title} />

        <h2 className={"subTitle"}>{subTitle}</h2>
      </div>
    </>
  );
};

export default TabHeader;
