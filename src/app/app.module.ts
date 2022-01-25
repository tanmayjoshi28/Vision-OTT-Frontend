import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { InitialComponent } from './components/initial/initial.component';
import { SearchPipe } from './pipes/search.pipe';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { AddVideoComponent } from './components/add-video/add-video.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    InitialComponent,
    SearchPipe,
    UserProfileComponent,
    AddVideoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
