import Loader from './loader';

class AppLoader extends Loader {
  constructor() {
    super('https://newsapi.org/v2/', {
      apiKey: '470002297b39497391a13f2a27ad0402', // получите свой ключ https://newsapi.org/
    });
  }
}

export default AppLoader;
