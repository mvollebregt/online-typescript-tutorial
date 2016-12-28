import {Progress} from "./Progress";

export interface Assignment {

  check(model: any): Progress;

}
