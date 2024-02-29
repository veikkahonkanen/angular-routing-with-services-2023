import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})
export class AdminComponent {
  message!: {};
  allAdmins: any[] = [];
  constructor(private activatedRoute: ActivatedRoute) {
    // this.message = activatedRoute.snapshot.data;
    // console.log(this.message);
    this.allAdmins = this.activatedRoute.snapshot.data["isAdminResolved"];
  }
}
