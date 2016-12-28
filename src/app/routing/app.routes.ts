import {RouterModule, Route} from "@angular/router";
import {toc} from "../content/toc";
import {Page} from "../model/Page";
import {AuthGuard} from "./auth-guard";
import {LandingComponent} from "../landing/landing.component";
import {NgModule} from "@angular/core";
import {NavigationService} from "../services/navigation.service";
import {ProgressTrackerService} from "../services/progress-tracker.service";
import {NavigatorComponent} from "../navigator/navigator.component";

const landing: Route = {
  path: '',
  component: LandingComponent
};

const fallback: Route = {
  path: '**', redirectTo: '/'
};

function makeRoute(page: Page): Route {
  return {
    path: page.path,
    component: NavigatorComponent,
    data: {page: page},
    canActivate: [AuthGuard]
  }
}

@NgModule({
  providers: [AuthGuard, NavigationService, ProgressTrackerService],
  imports: [RouterModule.forRoot([landing, ...toc.map(makeRoute), fallback])],
  exports: [RouterModule]
})
export class AppRouterModule {
}
