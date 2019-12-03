import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { VillaService } from "./add-villa.service";
import { VillaModel } from "../models/VillaModel";
import { Router } from "@angular/router";

@Component({
  selector: "app-add-villa",
  templateUrl: "./add-villa.component.html",
  styleUrls: ["./add-villa.component.scss"]
})
export class AddVillaComponent implements OnInit {
  registered = false;
  submitted = false;
  userForm: FormGroup;
  guid: string;
  serviceErrors: any = {};

  constructor(
    private formBuilder: FormBuilder,
    private villaService: VillaService,
    private router: Router
  ) {}

  invalidVillaName() {
    return (
      this.submitted &&
      (this.serviceErrors.villa_name != null ||
        this.userForm.controls.villa_name.errors != null)
    );
  }

  invalidCityName() {
    return (
      this.submitted &&
      (this.serviceErrors.city_name != null ||
        this.userForm.controls.city_name.errors != null)
    );
  }

  invalidPrice() {
    return (
      this.submitted &&
      (this.serviceErrors.price != null ||
        this.userForm.controls.price.errors != null)
    );
  }

  ngOnInit() {
    this.userForm = this.formBuilder.group({
      villa_name: ["", [Validators.required, Validators.maxLength(50)]],
      city_name: ["", [Validators.required, Validators.maxLength(50)]],
      price: [
        "",
        [Validators.required, Validators.pattern("^(0|[1-9][0-9]*)$")]
      ]
    });
  }

  onSubmit() {
    this.submitted = true;

    if (this.userForm.invalid == true) {
      return;
    } else {
      let data: any = Object.assign(this.userForm.value);
      this.villaService.addVilla(data).subscribe(
        (data: VillaModel) => {
          this.router.navigate(["/villas"]);
        },
        (error: any) => console.log(error)
      );
    }
  }
}
