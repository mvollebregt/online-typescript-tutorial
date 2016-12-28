import {Assignment} from "./Assignment";

export interface Page {

  path: string,
  title: string;
  text: string;
  assignment?: Assignment;

}
