import {Page} from "../model/Page";

export function maakTestPage(index: number): Page {
  return {
    path: `page${index}`,
    title: 'Welkom',
    text: `Welkom op pagina ${index}`
  };
}
