import { Component } from "@angular/core";
import { AboutComponent } from "./about/about.component";
import { SkillComponent } from "./skill/skill.component";
import { EducationComponent } from "./education/education.component";
import { AchivementsComponent } from "./achivements/achivements.component";
import { ContactComponent } from "./contact/contact.component";
import { from } from "rxjs";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "My-Portfolio";
}
