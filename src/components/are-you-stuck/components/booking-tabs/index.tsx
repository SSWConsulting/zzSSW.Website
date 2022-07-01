import React, { useState, useEffect, useCallback } from "react";

import ToggleButton from "../toggle-button";
// this is fine
import TabHeader from "../tabHeader";
import BusinessBooking from "../businessBooking";
import DeveloperBooking from "../developerBooking";
import * as styles from "./index.module.css";
import { useMountTransition } from "../../../../hooks/useMountTransition";

enum TabSelected {
  LEFT,
  RIGHT,
}

const LABELS = {
  BUTTON_BUSINESS: "I'm a Business Person",
  BUTTON_DEVELOPER: "I'm a Developer",
  TITLE_BUSINESS: `Are your <span class="red"> staff being driven nuts </span> by outdated software or manual processes?`,
  TITLE_DEVELOPER: "Find a way out of your nightmare",
  SUBTITLE_BUSINESS: "Need the right software to multiply your teams output?",
  SUBTITLE_DEVELOPER:
    "Are you stuck on legacy technologies and using sub-optimal practices?",
};

const Booking = () => {
  // const [isVisible, setIsVisible] = useState(false);
  // const showBookingForm = () => setIsVisible(!isVisible);

  const [isMounted, setIsMounted] = useState(true);

  const hasTransitionedIn = useMountTransition(isMounted, 1000);

  const [currentTab, setCurrentTab] = useState<TabSelected>(TabSelected.LEFT);

  const handleCurrentTab = useCallback(
    (id) => {
      let timeoutId;

      timeoutId = setTimeout(() => setCurrentTab(id), 1000);
      return () => {
        clearTimeout(timeoutId);
      };
      // } else {
      //   setCurrentTab(id);
      // }
    },
    [currentTab]
  );
  const handleIsMounted = useCallback(
    (toggle) => {
      if (!toggle && !hasTransitionedIn) {
        setIsMounted(true);
      }
      setIsMounted(toggle);
    },
    [isMounted]
  );
  useEffect(() => {
    if (!isMounted && !hasTransitionedIn) {
      setIsMounted(true);
    }
  }, [isMounted, hasTransitionedIn, currentTab]);

  return (
    <>
      <section className={styles.bookingContainer}>
        <article className="main-container">
          {/* heading */}
          {currentTab === TabSelected.LEFT && (
            <TabHeader
              title={LABELS.TITLE_BUSINESS}
              subTitle={LABELS.SUBTITLE_BUSINESS}
            />
          )}
          {currentTab === TabSelected.RIGHT && (
            <TabHeader
              title={LABELS.TITLE_DEVELOPER}
              subTitle={LABELS.SUBTITLE_DEVELOPER}
            />
          )}
          {/* buttons */}
          <div className={styles.flexContainer}>
            <div className={styles.flexChild}>
              <ToggleButton
                id={TabSelected.LEFT}
                setCurrentTab={handleCurrentTab}
                title={LABELS.BUTTON_BUSINESS}
                currentTab={currentTab}
                isMounted={isMounted}
                toggle={(value) => {
                  handleIsMounted(value);
                }}
              />
            </div>
            <div className={styles.flexChild}>
              <ToggleButton
                id={TabSelected.RIGHT}
                setCurrentTab={handleCurrentTab}
                title={LABELS.BUTTON_DEVELOPER}
                currentTab={currentTab}
                isMounted={isMounted}
                toggle={(value) => {
                  handleIsMounted(value);
                }}
              />
            </div>
          </div>
          {/* content */}
          {currentTab === TabSelected.LEFT && (
            <BusinessBooking
              hasTransitionedIn={hasTransitionedIn}
              isMounted={isMounted}
            />
          )}
          {currentTab === TabSelected.RIGHT && (
            <DeveloperBooking
              hasTransitionedIn={hasTransitionedIn}
              isMounted={isMounted}
            />
          )}
        </article>
      </section>
    </>
  );
};

export default Booking;
