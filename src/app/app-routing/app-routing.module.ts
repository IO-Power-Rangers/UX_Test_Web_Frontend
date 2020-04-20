import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmbedWebsiteComponent } from '../embed-website/embed-website.component';
import {HomePageComponent} from '../home-page/home-page.component';
import {LoginRegisterComponent} from '../login-register/login-register.component';

const routes: Routes = [
  {
    path: '',
    component: HomePageComponent,
  },
  {
    path: 'embed',
    component: EmbedWebsiteComponent,
  },
  {
    path: 'loginRegister',
    component: LoginRegisterComponent,
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
