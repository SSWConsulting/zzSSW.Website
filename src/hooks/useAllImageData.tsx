import { useStaticQuery, graphql } from "gatsby";
export const useAllImagesUrlData = () => {
  const ImagesUrlData = useStaticQuery(graphql`
    query ImagesUrlData {
      allImageUrls {
        nodes {
          imageUrl
          id
          exactMatch
        }
      }
    }
  `);
  return ImagesUrlData.allImageUrls.nodes;
};
