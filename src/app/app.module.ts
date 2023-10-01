import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatTableModule } from '@angular/material/table';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MyNavigationComponent } from './my-navigation/my-navigation.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import {MatCardModule} from '@angular/material/card';
import { HttpClientModule } from '@angular/common/http';
import { YummiesService } from './services/yummies.service';
import { SearchYummyComponent } from './search-yummy/search-yummy.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CakeComponent } from './cake/cake.component';
import { CookiesComponent } from './cookies/cookies.component';
import { BrowniesComponent } from './brownies/brownies.component';
import { OrderyummyComponent } from './orderyummy/orderyummy.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import { ViewyummyComponent } from './viewyummy/viewyummy.component';
import { LoginComponent } from './login/login.component';
import { OrderreportComponent } from './orderreport/orderreport.component';
import { ProtectreportService } from './services/protectreport.service';
import { AuthenticationService } from './services/authentication.service';
import { UploadorderService } from './services/uploadorder.service';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule} from '@angular/material/paginator';
@NgModule({
  declarations: [ // components
    AppComponent,
    HomeComponent,
    PageNotFoundComponent,
    MyNavigationComponent,
    SearchYummyComponent,
    CakeComponent,
    CookiesComponent,
    BrowniesComponent,
    OrderyummyComponent,
    ViewyummyComponent,
    LoginComponent,
    OrderreportComponent
  ],
  imports: [ //modules
    BrowserModule,
    MatPaginatorModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    ReactiveFormsModule,
    MatListModule,
    MatCardModule,
    HttpClientModule,
    FormsModule,
    MatSnackBarModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatInputModule,
    MatTableModule,
    MatSortModule
  ],
  providers: [
    YummiesService,
    ProtectreportService,
    AuthenticationService,
    UploadorderService
  ], // services
  bootstrap: [AppComponent]
})
export class AppModule { }
