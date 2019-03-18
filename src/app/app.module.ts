import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { SignupComponent } from './signup/signup.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';
import { NetworkService } from './network.service';
import { SessionService } from './session.service';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AuthGuardService } from './auth-guard.service';

const routes: Routes = [
  {path: "signup", component: SignupComponent},
  {path: "login", component: LoginComponent },
  {path: "contact", component: ContactComponent, canActivate: [AuthGuardService]},
  {path: "about", component: AboutComponent, canActivate:[AuthGuardService]},
  {path: "", redirectTo: "/login", pathMatch: "full"},
  {path: "**", component: PageNotFoundComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    SignupComponent,
    AboutComponent,
    ContactComponent,
    LoginComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
	  ReactiveFormsModule,
  ],
  providers: [NetworkService, SessionService, AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
