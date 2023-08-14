import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SearchComponent } from './search/search.component';
import { CreateComponent } from './create/create.component';

const routes: Routes = [
  { path: '',component: LoginComponent },
  { path: 'search',component: SearchComponent },
  { path: 'create',component: CreateComponent }  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
