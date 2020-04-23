import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomePageComponent} from '../home-page/home-page.component';
import {CreateTestsComponent} from '../create-tests/create-tests.component';
import {SignInOutComponent} from '../sign-in-out/sign-in-out.component';
import {ViewTestsComponent} from '../view-tests/view-tests.component';

const routes: Routes = [
  {
    path: '',
    component: HomePageComponent,
  },
  {
    path: 'createTests',
    component: CreateTestsComponent,
  },
  {
    path: 'viewTests',
    component: ViewTestsComponent,
  },
  {
    path: 'signInUp',
    component: SignInOutComponent,
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
