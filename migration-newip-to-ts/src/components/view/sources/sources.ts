import { Source } from '../../types/source';
import './sources.css';

class Sources {
  draw(sources: Source[]) {
    const fragment = document.createDocumentFragment();
    const sourceItemTemp: HTMLTemplateElement | null = document.querySelector('#sourceItemTemp');

    sources.forEach((item) => {
      if (sourceItemTemp) {
        const sourceClone = sourceItemTemp.content.cloneNode(true) as DocumentFragment;

        (sourceClone.querySelector('.source__item-name') as HTMLSpanElement).textContent = item.name;
        (sourceClone.querySelector('.source__item') as HTMLDivElement).setAttribute('data-source-id', item.id);

        fragment.append(sourceClone);
      }
    });

    document.querySelector('.sources')?.append(fragment);
  }
}

export default Sources;
