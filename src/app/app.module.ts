import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NoopAnimationsModule } from "@angular/platform-browser/animations";

import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatGridListModule } from "@angular/material/grid-list";
import { MatTableModule } from "@angular/material/table";
import { MatListModule } from "@angular/material/list";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { FormsModule } from "@angular/forms";
import { ReactiveFormsModule } from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";

import { AppComponent } from "./app.component";
import { from } from "rxjs";
import { AboutComponent } from "./about/about.component";
import { AchivementsComponent } from "./achivements/achivements.component";
import { ContactComponent } from "./contact/contact.component";
import { EducationComponent } from "./education/education.component";
import { SkillComponent } from "./skill/skill.component";
import { ProjectComponent } from './project/project.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    AchivementsComponent,
    ContactComponent,
    EducationComponent,
    SkillComponent,
    ProjectComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    NgbModule,
    MatSidenavModule,
    MatGridListModule,
    MatTableModule,
    MatListModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
