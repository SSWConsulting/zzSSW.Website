import React from 'react';
import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import Layout from '../components/layout';

const Page = ({ data }) => {
    const post = data.mdx;
    const {
        frontmatter: { title },
        body,
    } = post;

    return (
        <Layout pageTitle={title}>
            <>
                <h1>{title}</h1>
                <MDXRenderer>{body}</MDXRenderer>
            </>
        </Layout>
    );
};

export const query = graphql`
    query PageById($id: String) {
        mdx(id: { eq: $id }) {
            frontmatter {
                title
            }
            body
        }
    }
`;

export default Page;
