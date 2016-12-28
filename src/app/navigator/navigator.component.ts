import {Component, OnInit} from "@angular/core";
import {Page} from "../model/Page";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-navigator',
  templateUrl: './navigator.component.html'
})
export class NavigatorComponent implements OnInit {

  currentPage: Page;

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.route.data.subscribe((data: {page: Page}) => this.currentPage = data.page);
  }
}
