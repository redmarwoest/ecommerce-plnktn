const getAllArticlesPathsQuery = `
  query getAllArticlesPaths($first: Int = 250) {
    articles(first: $first) {
      edges {
        node {
          handle
        }
      }
    }
  }
`;

export default getAllArticlesPathsQuery;
