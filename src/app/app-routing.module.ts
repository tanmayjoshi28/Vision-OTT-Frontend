import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddVideoComponent } from './components/add-video/add-video.component';
import { InitialComponent } from './components/initial/initial.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { EditVideoComponent } from './components/edit-video/edit-video.component';
import { WatchVideoComponent } from './components/watch-video/watch-video.component';

const routes: Routes = [
  {path:'', component:InitialComponent},
  {path:'login', component:LoginComponent},
  {path:'register', component:RegisterComponent},
  {path:'add-video', component:AddVideoComponent},
  {path:'user/:id', component:UserProfileComponent},
  {path:'edit-video/:videoId', component:EditVideoComponent},
  {path:'watching/:videoId', component:WatchVideoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
