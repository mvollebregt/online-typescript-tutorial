import {Injectable} from '@angular/core';
import {register} from "./transpiler";
import './mini-jasmine';
import {Http} from "@angular/http";
import 'rxjs/add/operator/map';
import {Opdracht} from "./opdracht";
import {testGroups, runTests, clearTests} from "./mini-jasmine";

@Injectable()
export class TestRunner {

  testcode: string;

  constructor(http: Http) {
    http.get('assets/opdracht.spec.ts').map(resp => resp.text()).subscribe(text => {
        this.testcode = text;
      }
    );
  }

  test(source: string): Opdracht {
    try {
      register('./opdracht', source);
      return this.run();
    } catch (e) {
      console.log(e);
    }
  }

  run(): Opdracht {
    clearTests();
    register('./opdracht.spec', this.testcode ? this.testcode : '');
    runTests();
    for (let testGroup of testGroups) {
      for (let testCase of testGroup.testCases) {
        if (testCase.failures.length > 0) {
          console.log(testCase.failures);
          return {hoofdtekst: testGroup.title, subtekst: testCase.title};
        }
      }
    }
    return {hoofdtekst: 'Gefeliciteerd', subtekst: 'Je hebt de opdracht volbracht.'};
  }
}

