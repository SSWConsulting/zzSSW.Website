import { useEffect, useState } from "react";

export const useMountTransition = (isMounted, unmountDelay) => {
  const [hasTransitionedIn, setHasTransitionedIn] = useState(false);
  //   console.log("isMounted", isMounted);
  //   console.log("unmountDelay", unmountDelay);
  //   console.log("hasTransitionedIn", hasTransitionedIn);

  useEffect(() => {
    let timeoutId;
    // console.log("HERE");
    if (isMounted && !hasTransitionedIn) {
      console.log("Animation");
      timeoutId = setTimeout(() => setHasTransitionedIn(true), unmountDelay);
    } else if (!isMounted && hasTransitionedIn) {
      timeoutId = setTimeout(() => setHasTransitionedIn(false), unmountDelay);
      console.log("Not Animation");
    } // else if (!isMounted && !hasTransitionedIn) {
    //   timeoutId = setTimeout(() => setHasTransitionedIn(true), unmountDelay);
    // }

    return () => {
      clearTimeout(timeoutId);
    };
  }, [unmountDelay, isMounted, hasTransitionedIn]);

  return hasTransitionedIn;
};
