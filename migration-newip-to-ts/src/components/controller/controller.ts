import { NewsResponse } from '../types/news';
import { SourcesResponse } from '../types/source'
import AppLoader from './appLoader';

class AppController extends AppLoader {
  getSources(callback: (sources: SourcesResponse) => void) {
    super.getResp({
      endpoint: 'sources',
    }, callback);
    }

    getNews(e: Event, callback: (news: NewsResponse) => void) {
      let target = e.target as Element | ParentNode | null;
      const newsContainer = e.currentTarget as Element;

      while (target && target !== newsContainer) {
        if (target instanceof Element && target.classList.contains('source__item')) {
          const sourceId = target.getAttribute('data-source-id');
          if (sourceId && newsContainer?.getAttribute('data-source') !== sourceId) {
            newsContainer.setAttribute('data-source', sourceId);
            super.getResp({
              endpoint: 'everything',
              options: {
                sources: sourceId,
              },
            }, callback);
          }
          return;
        }

        target = target.parentNode;
      }
    }
}

export default AppController;
