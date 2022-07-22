import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BeehiveComponent } from './components/beehive/beehive.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: "home", component: HomeComponent},
  {path: "home/beehives", component: BeehiveComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
