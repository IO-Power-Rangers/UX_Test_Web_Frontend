import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomePageComponent} from '../components/home-page/home-page.component';
import {CreateTestsComponent} from '../components/create-tests/create-tests.component';
import {SignInOutComponent} from '../components/sign-in-out/sign-in-out.component';
import {ViewTestsComponent} from '../components/view-tests/view-tests.component';
import {CreateQuestionnaireComponent} from '../components/create-questionnaire/create-questionnaire.component';
import {ScreenRecordingComponent} from '../components/screen-recording/screen-recording.component';
import {RecordingPermissionViewComponent} from '../components/recording-permission-view/recording-permission-view.component';
import { LoginPageComponent } from '../components/login-page/login-page.component';
import { CreateCardSortingTestComponent } from "../components/create-card-sorting-test/create-card-sorting-test.component";

const routes: Routes = [
  {path:'',
  redirectTo: '/login',
  pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginPageComponent,
  },
  {
    path: 'home',
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
  {
    path: 'createQuestionnaire',
    component: CreateQuestionnaireComponent,
  },
  {
    path: 'cardsorting/createTest',
    component: CreateCardSortingTestComponent
  },
  {
    path: 'screenRecording',
    component: RecordingPermissionViewComponent, // since ScreenRecordingComponent is not finished yet
    // component: ScreenRecordingComponent,
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
