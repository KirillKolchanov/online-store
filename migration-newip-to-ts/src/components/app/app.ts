import AppController from '../controller/controller';
import { NewsResponse } from '../types/news';
import { AppView } from '../view/appView';

class App {
  controller = new AppController();
  view = new AppView();

  start() {
    document.querySelector('.sources')?.addEventListener(
      'click',
      (e) => this.controller.getNews(e, (news: NewsResponse) => this.view.drawNews(news))
    );
    this.controller.getSources((sources) => this.view.drawSources(sources));
  }
}

export default App;
