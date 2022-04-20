import { useEffect } from "react";
import { navigate } from "gatsby";
import { BASE_URL } from "../constants";

export default () => {
  useEffect(() => {
    navigate(BASE_URL);
  }, []);
  return null;
};
