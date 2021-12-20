const { reporter } = require('gatsby-cli/lib/reporter/reporter');
const path = require('path')

//Create pages from content repository
exports.createPages = ({graphql, actions}) =>{
    const { createPage } = actions;
    const consultingTemplate = path.resolve(`src/templates/consultingTemplate.tsx`)

    //TODO: Make this function generic enough to cater for all future pages
    return graphql(`
    query ContentNodesQuery {
        files: allFile(filter: {relativeDirectory: {glob: "consulting/**"}}) {
            edges {
                node {
                    sourceInstanceName
                    relativeDirectory
                    childMdx {
                        frontmatter {
                            title
                        }
                    }
                }
            }
        }
    }`).then(result => {
        if(result.errors)
            throw result.errors

        result.data.files.edges.forEach(edge => {
            var node = edge.node;

            //Checks if this node has an mdx
            if(node.childMdx == null)
                return;

            reporter.info(`Creating page ${node.relativeDirectory}`)
            createPage({
                path: node.relativeDirectory,
                component: consultingTemplate,
                context:{
                    title: node.childMdx.frontmatter.title,
                }
            })
        })
    })
}