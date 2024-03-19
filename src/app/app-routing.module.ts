import { NgModule, createComponent } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateComponent } from './create/create.component';
import { AllUsersComponent } from './all-users/all-users.component';
import { UserdetailComponent } from './userdetail/userdetail.component';


const routes: Routes = [
  {path:'', component: CreateComponent},
  {path: 'all-users',  component: AllUsersComponent},
  { path: 'user/:id', component: UserdetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule { }
