import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { ListTaskComponent } from './Task/list-task/list-task.component';
import { SigninComponent } from './Auth/signin/signin.component';
import { SignupComponent } from './Auth/signup/signup.component';


const routes: Routes = [
  {
    path: 'main',
    component: MainComponent
  },
  {
    path: 'tasklist',
    component: ListTaskComponent
 },
 {
  path: 'signin',
  component: SigninComponent
},
{
  path: 'signup',
  component: SignupComponent
},
 {
  path: '',
  redirectTo: '/main', pathMatch:'full'
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
