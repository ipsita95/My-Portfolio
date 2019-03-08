import { Component } from "@angular/core";

export interface CourseElement {
  name: string;
  position: number;
  year: string;
  course: string;
}

const ELEMENT_DATA: CourseElement[] = [
  {
    position: 1,
    year: "2014-18",
    name: "Bengal Institute of Technology",
    course: "Bachelor of Technology"
  },
  {
    position: 2,
    year: "March 2013",
    name: "Santragachi Kedar Nath Institution for Girls",
    course: "12th"
  },
  {
    position: 2,
    year: "March 2011",
    name: "Santragachi Kedar Nath Institution for Girls",
    course: "10th"
  }
];

@Component({
  selector: "app-education",
  templateUrl: "./education.component.html",
  styleUrls: ["./education.component.css"]
})
export class EducationComponent {
  displayedColumns: string[] = ["position", "year", "name", "course"];
  dataSource = ELEMENT_DATA;
}
