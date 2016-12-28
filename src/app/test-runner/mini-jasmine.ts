export class TestGroup {

  constructor(public title: string) {}
  testCases : TestCase[] = [];

}

export class TestCase {

  constructor(public title: string, public code : () => void) {}
  failures: string[] = [];

}

export let testGroups : TestGroup[] = [];
let currentTestCase;

export function describe(title: string, code: () => void) : void {
  testGroups.push(new TestGroup(title));
  code();
}

export function it(title: string, code: () => void) : void {
  testGroups[testGroups.length - 1].testCases.push(new TestCase(title, code));
}

export function fail(message: string) {
  currentTestCase.failures.push(message);
}

export function clearTests() {
  testGroups = [];
}

export function runTests() {
  for (let testGroup of testGroups) {
    for (let testCase of testGroup.testCases) {
      currentTestCase = testCase;
      try {
        testCase.code();
      } catch(e) {
        fail(e);
      }
    }
  }
}

window['describe'] = describe;
window['it'] = it;
window['fail'] = fail;
