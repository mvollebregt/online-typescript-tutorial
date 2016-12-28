import {Component, OnInit} from '@angular/core';
import {TestRunner} from "./test-runner/test-runner";
import {Opdracht} from "./test-runner/opdracht";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  opdracht: Opdracht;
  source: string = '';

  constructor(private testRunner: TestRunner) {}

  ngOnInit(): void {
    this.run();
  }

  run() : void {
    let result = this.testRunner.test(this.source);
    this.opdracht = result;
  }
}
