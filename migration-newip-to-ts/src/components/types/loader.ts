export interface LoaderOptions {
  apiKey: string;
}

export interface LoaderRequestOptions {
  sources?: string
}

export type HTTPMethod = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE' | 'OPTIONS'
