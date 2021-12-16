import React from "react";
import Layout from '../components/layout/layout'
import { graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";


const ConsultingPage = ({data}) => {
    const mdx = data.mdx
    return(
        <Layout pageTitle="title">
            <div className="container-flex">
                <h1>{data.mdx.frontmatter.title}</h1>
                <MDXRenderer>
                    {mdx.body}
                </MDXRenderer>
            </div>
        </Layout>
    )
}

export const query = graphql`
    query ($title: String!){
        mdx(frontmatter: {title: {eq: $title}}) {
            frontmatter {
              title
            }
            body
        }
    }
`;

export default ConsultingPage;