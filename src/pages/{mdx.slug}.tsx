import React from 'react';
import { graphql } from 'gatsby';

import Consulting from '../templates/consulting';
import NotFound from './404';
import { PAGE_TYPE } from '../consts';

const Page = ({
    data: {
        mdx: { frontmatter },
    },
}) => {
    const { type } = frontmatter;

    if (type === PAGE_TYPE.Consulting) {
        return <Consulting data={frontmatter} />;
    }

    return <NotFound />;
};

export const query = graphql`
    query PageById($id: String) {
        mdx(id: { eq: $id }) {
            frontmatter {
                type
                title
                benefits {
                    descriptions
                    title
                    video {
                        url
                        coverFilename
                    }
                    benefit {
                        description
                        iconFilename
                        title
                    }
                    rule {
                        name
                        url
                    }
                }
                booking {
                    title
                    subTitle
                }
            }
        }
    }
`;

export default Page;
