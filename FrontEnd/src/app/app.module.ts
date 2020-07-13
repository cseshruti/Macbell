import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgZone } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { ReactiveFormsModule } from '@angular/forms';
import { UserModelComponent } from './user-model/user-model.component';
import { LoginComponent } from './user-model/login.component';
import { ProfileComponent } from './user-model/profile.component';
import { CompleteProfileComponent } from './user-model/complete-profile.component';
import { AuthInterceptor } from './_services/authconfig.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    HomeComponent,
    UserModelComponent,
    LoginComponent,
    ProfileComponent,
    CompleteProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
