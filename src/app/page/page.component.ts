import {Component, Input} from "@angular/core";
import {Page} from "../model/Page";

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html'
})
export class PageComponent {

  @Input() currentPage: Page;

}
