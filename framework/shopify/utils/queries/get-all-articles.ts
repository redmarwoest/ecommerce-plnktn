const getAllArticlesQuery = `
  query getAllArticles($first: Int = 250) {
    articles(first: $first) {
      pageInfo {
        hasNextPage
        hasPreviousPage
      }
        edges {
          node {
            id
            handle
            title
            publishedAt
            authorV2
            content
            image {
                  originalSrc
                  altText
                  width
                  height
            }
          }
        }
    }
  }
`;

export default getAllArticlesQuery;
