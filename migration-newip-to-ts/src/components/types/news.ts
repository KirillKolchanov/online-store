export interface Article {
  author: string;
  content: string;
  description: string;
  publishedAt: string;
  source: {
    id: string;
    name: string;
  }
  title: string;
  url: string;
  urlToImage: string;
}

export interface NewsResponse {
  status: 'ok' | 'error';
  code?: number;
  error?: Error;
  totalResults: number;
  articles: Article[]
}

export type NewsResponseCallback = (news: NewsResponse) => void
