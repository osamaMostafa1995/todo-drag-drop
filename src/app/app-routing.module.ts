import { SignInComponent } from './auth/sign-in/sign-in.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodosComponent } from './Componets/todos/todos.component';

const routes: Routes = [
  {
    path:"" , component:SignInComponent , pathMatch:'full'
  },
  { path:"todo" , component:TodosComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
