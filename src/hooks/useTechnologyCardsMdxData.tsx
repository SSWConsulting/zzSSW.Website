import { useStaticQuery, graphql } from "gatsby";
export const useTechnologyCardsMdxData = () => {
  const { allMdx } = useStaticQuery(graphql`
    query technologyCardsComponentQuery {
      allMdx(filter: { fields: { source: { eq: "technologies" } } }) {
        nodes {
          frontmatter {
            type
            key
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
