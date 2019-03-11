import { Component } from "@angular/core";
import {
  FormGroup,
  FormControl,
  Validators,
  ReactiveFormsModule
} from "@angular/forms";

@Component({
  selector: "app-contact",
  templateUrl: "./contact.component.html",
  styleUrls: ["./contact.component.css"]
})
export class ContactComponent {
  form = new FormGroup({
    name: new FormControl("", Validators.required),
    email: new FormControl("", [Validators.email, Validators.required])
  });
  get name() {
    return this.form.get("name");
  }
  get email() {
    return this.form.get("email");
  }
}
