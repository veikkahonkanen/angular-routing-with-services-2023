import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule, RouterOutlet } from "@angular/router";
import { FormGroup, FormControl } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { ProfileService } from '../profile.service';
import { HttpClientModule } from '@angular/common/http';

import * as employeeData from "../data/db.json";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    RouterModule,
    RouterOutlet,
    ReactiveFormsModule,
    HttpClientModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
  providers: [
    HttpClientModule
  ]
})
export class LoginComponent implements OnInit {
  formLogin!: FormGroup;
  /* empId: string = "";
  name: string = "";
  pageEdit: number = 0;
  empData: any = employeeData as any; */
  constructor(private profileService: ProfileService /* private route: ActivatedRoute, private router: Router */) {
    this.formLogin = this.createFormGroup();
  }

  ngOnInit(): void {
    // this.route.params.subscribe((param) => {
    /* this.route.queryParams.subscribe((param) => {
      this.empId = param["id"] || 0;
      this.pageEdit = +param["edit"] || 0;

      // console.log(param["id"]);
      // this.name = this.empData.employees[param["id"] - 1]?.username;
      // const employee = this.empData.employees.find((employee: any) => employee.id == param["id"]);
      // if (employee) this.name = employee.username;
    });
    console.log(this.empId, this.pageEdit); */
  }

  createFormGroup() {
    return new FormGroup({
      username: new FormControl(""),
      password: new FormControl("")
    });
  }

  onSubmit() {
    console.log(this.profileService.login());
  }
}
