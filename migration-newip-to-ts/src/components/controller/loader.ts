import { HTTPMethod, LoaderOptions, LoaderRequestOptions } from '../types/loader';

class Loader {
  baseLink: string;
  options: LoaderOptions;

  constructor(baseLink: string, options: LoaderOptions) {
    this.baseLink = baseLink;
    this.options = options;
  }

  getResp<T>(
    { endpoint, options = {} }: { endpoint: string, options?: LoaderRequestOptions},
     callback: (data: T) => void = () => { console.error('No callback for GET response'); }
    ) {
      this.load('GET', endpoint, callback, options);
    }

  errorHandler(res: Response) {
    if (!res.ok) {
      if (res.status === 401 || res.status === 404)
        console.log(`Sorry, but there is ${res.status} error: ${res.statusText}`);
      throw Error(res.statusText);
    }
    return res;
  }

  makeUrl(options: LoaderRequestOptions, endpoint: string) {
    const urlOptions: { [key:string]: string } = { ...this.options, ...options };
    let url = `${this.baseLink}${endpoint}?`;

    Object.keys(urlOptions).forEach((key) => {
      url += `${key}=${urlOptions[key]}&`;
    });

    return url.slice(0, -1);
  }

  load<T>(method: HTTPMethod, endpoint: string, callback: (data: T) => void, options: LoaderRequestOptions = {}) {
    fetch(this.makeUrl(options, endpoint), { method })
      .then(this.errorHandler)
      .then((res) => res.json())
      .then((data) => callback(data))
      .catch((err) => console.error(err));
  }
}

export default Loader;
