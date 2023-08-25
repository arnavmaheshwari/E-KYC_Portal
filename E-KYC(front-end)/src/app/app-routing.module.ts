import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SearchComponent } from './search/search.component';
import { CreateComponent } from './create/create.component';
import { loginGuardGuard } from './login-guard.guard';

const routes: Routes = [
  { path: '',component: LoginComponent },
  { path: 'search',component: SearchComponent, canActivate: [loginGuardGuard] },
  { path: 'create',component: CreateComponent, canActivate: [loginGuardGuard] }  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
