import News from './news/news';
import Sources from './sources/sources';
import { SourcesResponse } from '../types/source';
import { NewsResponse } from '../types/news';

export class AppView {
    news = new News();
    sources = new Sources();

  drawNews(news: NewsResponse) {
    const values = news?.articles ? news?.articles : [];
    this.news.draw(values);
  }

  drawSources(sourcesResponse: SourcesResponse) {
    const values = sourcesResponse?.sources ? sourcesResponse?.sources : [];
    this.sources.draw(values);
  }
}

export default AppView;
