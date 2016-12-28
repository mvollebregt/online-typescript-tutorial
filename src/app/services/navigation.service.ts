import {Page} from "../model/Page";
import {toc} from "../content/toc";

export class NavigationService {

  predecessor(path: string): Page {
    let index = this.indexOf(path);
    return index > 0 ? toc[index - 1] : undefined;
  }

  successor(path: string): Page {
    let index = this.indexOf(path);
    return index > -1 && index < toc.length - 1 ? toc[index + 1] : undefined;
  }

  private indexOf(path: string) {
    return toc.findIndex(page => page.path === path);
  }
}
