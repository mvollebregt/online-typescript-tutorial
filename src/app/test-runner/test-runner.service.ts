import {Injectable} from '@angular/core';
import '../../opdracht/opdracht.spec';
import {Opdracht} from "./opdracht";

@Injectable()
export class TestRunnerService {

  testSuite : [string, [string, () => void][]][];

  constructor() {
    this.testSuite = window['buildTestSuite']();
  }

  run() : Opdracht {
    for (let description of this.testSuite) {
      for (let it of description[1]) {
        try {
          it[1]();
        } catch (e) {
          console.log(e);
          return {hoofdtekst: description[0], subtekst: it[0]};
        }
      }
    }

    return {hoofdtekst: 'Gefeliciteerd', subtekst: 'Je hebt de opdracht volbracht.'};
  }
}
