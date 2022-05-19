import { MDXRenderer } from 'gatsby-plugin-mdx';
import React, {ReactElement} from 'react';

import * as styles from "./index.module.css";

const Body = ({ content }) => {
    // TODO: MDXRenderer {.node.body}
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