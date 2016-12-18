import {Component, OnInit} from '@angular/core';
import {TestRunnerService} from "./test-runner/test-runner.service";
import {Opdracht} from "./test-runner/opdracht";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  opdracht : Opdracht;

  constructor(private testRunnerService: TestRunnerService) {}

  ngOnInit(): void {
    this.opdracht = this.testRunnerService.run();
  }
}
