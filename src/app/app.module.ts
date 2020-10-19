import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { MiniComponent } from "./mini/mini.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { NgxChartsModule } from "@swimlane/ngx-charts";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HttpClientModule } from "@angular/common/http";

import { RouterModule, Routes } from "@angular/router";
import { AuthorizedComponent } from "./authorized/authorized.component";

const routes: Routes = [
  { path: "", component: DashboardComponent },
  { path: "mini", component: MiniComponent },
  { path: "authorized", component: AuthorizedComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    MiniComponent,
    DashboardComponent,
    AuthorizedComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NgxChartsModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
