const getArticleQuery = `
query articleByHandle($slug: String) {
    articleByHandle(handle: $slug) {
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
`;

export default getArticleQuery;
