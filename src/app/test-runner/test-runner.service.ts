import {Injectable} from '@angular/core';
import '../../opdracht/opdracht.spec';
import {Opdracht} from "./opdracht";
import JsApiReporter = jasmine.JsApiReporter;
import Jasmine = jasmine.Jasmine;

@Injectable()
export class TestRunnerService {

  testSuite : [string, [string, () => void][]][];

  constructor() {
    // this.testSuite = window['buildTestSuite']();
  }

  run() : Opdracht {
    let env  = window['jasmine'].getEnv();
    env.execute();
    let jsApiReporter : JsApiReporter = window['jsApiReporter'];
    console.log("" + jsApiReporter.suites().length);
    console.log("" + jsApiReporter['specs']().length);
    for (let spec of jsApiReporter['specs']()) {
      if (spec.failedExpectations.length > 0) {
        return { hoofdtekst: spec.fullName, subtekst: spec.description}; //, errors: spec.failedExpectations};
      }
      // for (let spec of suite.specs()) {
        console.log(spec);
      // }
    }

    // for (let description of this.testSuite) {
    //   for (let it of description[1]) {
    //     try {
    //       it[1]();
    //     } catch (e) {
    //       console.log(e);
    //       return {hoofdtekst: description[0], subtekst: it[0]};
    //     }
    //   }
    // }

    return {hoofdtekst: 'Gefeliciteerd', subtekst: 'Je hebt de opdracht volbracht.'};
  }
}
