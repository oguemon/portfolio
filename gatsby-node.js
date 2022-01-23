const path = require("path");
exports.createPages = async ({ graphql, actions, reporter }) => {
    const { createPage } = actions;

    const result = await graphql(`
        query MyQuery {
        allContentfulPortfolio {
            edges {
                node {
                    abstract
                    category
                    client
                    slug
                    role
                    tech
                    title
                    url
                    year
                    description {
                        description
                    }
                    topimg {
                        file {
                            url
                        }
                        title
                        gatsbyImageData
                    }
                    subimgs {
                        title
                        gatsbyImageData(layout: FULL_WIDTH)
                    }
                }
            }
        }
        }
    `);

    if (result.errors) {
        reporter.panicOnBuild("Error while running GraphQL query.");
        return;
    }

    const { edges } = result.data.allContentfulPortfolio;

    edges.forEach(edge => {
        createPage({
            path: `/work/${edge.node.slug}/`,
            component: path.resolve("./src/templates/work-detail.tsx"),
            context: { post: edge.node },
        });
    });
};
