import { MDXRenderer } from 'gatsby-plugin-mdx';
import React from 'react';

const Body = ({ content }) => {
    const bodyContent = content;
    return(
        <div className="body">
            <MDXRenderer>
                {bodyContent}
            </MDXRenderer>
        </div>
    )
}

export default Body;