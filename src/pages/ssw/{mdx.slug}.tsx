import React from 'react';
import { graphql } from 'gatsby';

import Consulting from '../../templates/consulting';
import NotFound from '../404';
import { PAGE_TYPE } from '../../consts';

const Page = ({data}) => {
    const { type } = data.mdx.frontmatter;
    if (type === PAGE_TYPE.Consulting) {
        return <Consulting data={data} />;
    }

    return <NotFound />;
};

export const query = graphql`
    query PageById($id: String) {
        mdx(id: { eq: $id }) {
            frontmatter {
                type
                title
                booking {
                    title
                    subTitle
                }
                benefits {
                    benefitList {
                        image {
                            childImageSharp {
                                gatsbyImageData
                            }
                        }
                        title
                        description
                    }
                    rule {
                        name
                        url
                    }
                }
                solution {
                    project
                }
                technologies {
                    name
                }
            }
            body
        }
    }
`;

export default Page;
