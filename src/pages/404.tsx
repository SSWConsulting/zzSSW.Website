import * as React from "react";
import Layout from "../components/layout";
import { WHITE } from "../constants";

// markup
const NotFoundPage = () => {
  return (
    <Layout backgroundColor={WHITE} pageTitle="Page not found">
      <h1>404! PAGE NOT FOUND!</h1>
    </Layout>
  );
};

export default NotFoundPage;
