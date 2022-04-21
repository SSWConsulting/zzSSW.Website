import { useStaticQuery, graphql } from "gatsby";
export const useTechnologyMdxData = () => {
  const { allMdx } = useStaticQuery(graphql`
    query technologyComponentQuery {
      allMdx(filter: { fields: { source: { eq: "technologies" } } }) {
        nodes {
          frontmatter {
            type
            key
            title
            logoImage {
              childImageSharp {
                gatsbyImageData
              }
            }
            readMoreSlug
          }
          body
        }
      }
    }
  `);
  return allMdx.nodes;
};
