import { useStaticQuery, graphql } from "gatsby";
export const useAllImagesUrlData = () => {
  const ImagesUrlData = useStaticQuery(graphql`
    query ImagesUrlData {
      allImageUrls {
        nodes {
          imageUrl
          id
          exactMatch
          image {
            childImageSharp {
              gatsbyImageData(height: 100)
            }
          }
        }
      }
    }
  `);
  return ImagesUrlData.allImageUrls.nodes;
};
