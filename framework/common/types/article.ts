export interface ArticleImage {
  url: string;
  alt?: string;
}

export interface Article {
  id: string;
  title: string;
  publishedAt: string;
  authorV2: any;
  content: string;
  slug: string;
  path: string;
  image: string;
}
