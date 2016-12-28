import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {AppComponent} from "./app.component";
import {TestRunner} from "./test-runner/test-runner";
import {PageComponent} from "./page/page.component";
import {NavigatorComponent} from "./navigator/navigator.component";
import {LandingComponent} from "./landing/landing.component";
import {AppRouterModule} from "./routing/app.routes";

@NgModule({
  declarations: [
    AppComponent,
    NavigatorComponent,
    LandingComponent,
    PageComponent
  ],
  imports: [
    AppRouterModule,
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [TestRunner],
  bootstrap: [AppComponent]
})
export class AppModule { }
