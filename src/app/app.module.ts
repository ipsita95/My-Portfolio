import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NoopAnimationsModule } from "@angular/platform-browser/animations";

import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatGridListModule } from "@angular/material/grid-list";
import { MatTableModule } from "@angular/material/table";
import { MatListModule } from "@angular/material/list";

import { AppComponent } from "./app.component";
import { from } from "rxjs";
import { AboutComponent } from './about/about.component';
import { AchivementsComponent } from './achivements/achivements.component';
import { ContactComponent } from './contact/contact.component';
import { EducationComponent } from './education/education.component';
import { SkillComponent } from './skill/skill.component';

@NgModule({
  declarations: [AppComponent, AboutComponent, AchivementsComponent, ContactComponent, EducationComponent, SkillComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    NgbModule,
    MatSidenavModule,
    MatGridListModule,
    MatTableModule,
    MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
