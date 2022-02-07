import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { InitialComponent } from './components/initial/initial.component';
import { SearchPipe } from './pipes/search.pipe';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { AddVideoComponent } from './components/add-video/add-video.component';
import { EditVideoComponent } from './components/edit-video/edit-video.component';
import { WatchVideoComponent } from './components/watch-video/watch-video.component';
import { UrlTransformPipe } from './pipes/url-transform.pipe';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    InitialComponent,
    SearchPipe,
    UserProfileComponent,
    AddVideoComponent,
    EditVideoComponent,
    WatchVideoComponent,
    UrlTransformPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
