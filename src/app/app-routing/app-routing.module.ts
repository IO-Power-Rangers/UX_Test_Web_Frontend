import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomePageComponent} from '../components/home-page/home-page.component';
import {CreateTestsComponent} from '../components/create-tests/create-tests.component';
import {SignInOutComponent} from '../components/sign-in-out/sign-in-out.component';
import {ViewTestsComponent} from '../components/view-tests/view-tests.component';
import {CreateQuestionnaireComponent} from '../components/create-questionnaire/create-questionnaire.component';
import {ScreenRecordingComponent} from '../components/screen-recording/screen-recording.component';
import {RecordingPermissionViewComponent} from '../components/recording-permission-view/recording-permission-view.component';

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
  {
    path: 'createQuestionnaire',
    component: CreateQuestionnaireComponent,
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
