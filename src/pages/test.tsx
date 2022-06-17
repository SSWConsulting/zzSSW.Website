import { graphql } from "gatsby";
import React from "react";

const test = ({ data }) => {
  console.log(data);
  const consultingNodes = data.allMdx.nodes.filter(
    (node) => node.fields.source === "content" && node.slug !== "consulting/"
  );
  console.log(consultingNodes);
  return <></>;
};
export default test;
export const query = graphql`
  query {
    allMdx {
      nodes {
        fields {
          source
        }
        slug
      }
    }
  }
`;
