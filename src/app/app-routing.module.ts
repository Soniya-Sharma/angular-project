import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { CakeComponent } from './cake/cake.component';
import { CookiesComponent } from './cookies/cookies.component';
import { BrowniesComponent } from './brownies/brownies.component';
import { OrderyummyComponent } from './orderyummy/orderyummy.component';
import { LoginComponent } from './login/login.component';
import { OrderreportComponent } from './orderreport/orderreport.component';
import { ProtectreportService } from './services/protectreport.service';
import { OrderdeactivateService } from './services/orderdeactivate.service';

const routes: Routes = [
  {path:'',redirectTo:'/home',pathMatch:'full'},
  {path:"home",component:HomeComponent},
  {path:'cake',component:CakeComponent},
  {path:'cookies',component:CookiesComponent},
  {path:'brownies',component:BrowniesComponent},
  {path:'order/:id',component:OrderyummyComponent,canDeactivate:[OrderdeactivateService]},
  {path:'login',component:LoginComponent},
  {path:'login',component:OrderreportComponent
   ,    canActivate:[ProtectreportService]
    },
  
  {path:'**',component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
