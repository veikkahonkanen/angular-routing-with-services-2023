import { Routes } from '@angular/router';
import { HomeComponent } from "./home/home.component";
import { RegisterComponent } from "./register/register.component";
import { LoginComponent } from "./login/login.component";
import { AdminComponent } from './admin/admin.component';
import { NotFoundComponent } from './not-found.component';
import { restrictedGuard } from './restricted.guard';
import { administratorsResolver } from './administrators.resolver';

export const routes: Routes = [
  {
    path: "",
    redirectTo: "home",
    pathMatch: "full",
  },
  {
    path: "home",
    component: HomeComponent,
  },
  {
    path: "register",
    component: RegisterComponent,
  },
  {
    path: "login",
    component: LoginComponent,
    children: [
      {
        path: ":id",
        // component: AdminComponent,
        // canActivate: [ restrictedGuard ],
        loadChildren: () => import("./admin/admin.module")
          .then((module) => module.AdminModule),
          data: { message: "Remember to log out!" },
          resolve: { isAdminResolved: administratorsResolver }
      }
    ]
  },
  {
    path: "**",
    component: NotFoundComponent,
  }
];
