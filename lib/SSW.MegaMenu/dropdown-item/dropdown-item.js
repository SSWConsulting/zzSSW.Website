import React from "react";
import {
  NonClickableMenuItem,
  level1,
  level2,
  ignore,
  ClickableMenuItem,
} from "./dropdown-item.module.css";
import cs from "classnames";

const DropdownItem = ({ item, index }) => {
  const styles = [
    NonClickableMenuItem,
    level1,
    level2,
    ignore,
    ClickableMenuItem,
  ];
  const l1Class = item.data.navigateUrlOnMobileOnly
    ? cs(NonClickableMenuItem, level1)
    : item.data.cssClass
    ? cs(styles[item.data.cssClass], level1)
    : level1;
  
  console.log(item);

  return (
    <>
      {item.level === 1 && (
        <li key={index} className={l1Class}>
          {(!item.data.navigateUrl || item.data.navigateUrlOnMobileOnly) && (
            <span className={cs(ignore, "unstyled")}>{item.data.text}</span>
          )}
          {item.data.navigateUrl && !item.data.navigateUrlOnMobileOnly && (
            <a
              href={item.data.navigateUrl ? item.data.navigateUrl : null}
              className={cs(ignore, "unstyled")}
            >
              {item.data.text}
            </a>
          )}
        </li>
      )}
      {item.level === 2 && (
        <li
          key={index}
          className={
            item.data.cssClass
              ? cs(styles[item.data.cssClass], ClickableMenuItem, level2)
              : cs(ClickableMenuItem, level2)
          }
        >
          <a
            href={item.data.navigateUrl ? item.data.navigateUrl : null}
            className={cs(ignore, "unstyled")}
          >
            {item.data.text}
          </a>
        </li>
      )}
    </>
  );
};

export default DropdownItem;
