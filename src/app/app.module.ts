import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {AppComponent} from './app.component';
import {HeaderComponent} from './components/header/header.component';
import {AppRoutingModule} from './app-routing/app-routing.module';
import {HomePageComponent} from './components/home-page/home-page.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CreateTestsComponent} from './components/create-tests/create-tests.component';
import {SignInOutComponent} from './components/sign-in-out/sign-in-out.component';
import {SocialLoginModule, AuthServiceConfig} from 'angularx-social-login';
import {GoogleLoginProvider} from 'angularx-social-login';
import {FlexLayoutModule} from '@angular/flex-layout';
import {DoTestComponent} from './components/doTest/do-test.component';
import { RecordingPermissionViewComponent } from './components/recording-permission-view/recording-permission-view.component';
import { HttpClientModule } from '@angular/common/http';
import { ScreenRecordingComponent } from './components/screen-recording/screen-recording.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import {ReactiveFormsModule} from '@angular/forms';
import { ViewRecordingsComponent } from './components/view-recordings/view-recordings.component';
import {CreateCardSortingTestComponent} from './components/create-card-sorting-test/create-card-sorting-test.component';
import { PerformCardSortingTestComponent } from './components/perform-card-sorting-test/perform-card-sorting-test.component';
import {DragDropModule} from '@angular/cdk/drag-drop';
import { ViewResultsOfTestComponent } from './components/view-results-of-test/view-results-of-test.component';
import { MaterialModule } from './material/material.module';
import { ResultsVisualizationComponent } from './components/results-visualization/results-visualization.component';
import { DynamicResultVisualizationComponent } from './components/results-visualization/dynamic-result-visualization/dynamic-result-visualization.component';
import { LikertScaleVisualizationComponent } from './components/results-visualization/specific/likert-scale-visualization/likert-scale-visualization.component';
import { MultipleChoiceVisualizationComponent } from './components/results-visualization/specific/multiple-choice-visualization/multiple-choice-visualization.component';
import { MultipleAnswerVisualizationComponent } from './components/results-visualization/specific/multiple-answer-visualization/multiple-answer-visualization.component';
import { TextVisualizationComponent } from './components/results-visualization/specific/text-visualization/text-visualization.component';
import { ChartsModule } from 'ng2-charts';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { PendingChangesGuard } from './dialogs/pending-changes';
import { LoadTestsComponent } from './components/load-tests/load-tests.component';
import { ExportButtonComponent } from './components/export-button/export-button.component';
import { ViewTestsComponent} from './components/view-tests/view-tests.component';

const config = new AuthServiceConfig([
  {
    id: GoogleLoginProvider.PROVIDER_ID,
    provider: new GoogleLoginProvider('944733091784-0d5mutvk7j4qm2uteh76fq6p7u21qhdh.apps.googleusercontent.com')
  }
]);

export function provideConfig() {
  return config;
}

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomePageComponent,
    CreateTestsComponent,
    SignInOutComponent,
    DoTestComponent,
    RecordingPermissionViewComponent,
    ScreenRecordingComponent,
    LoginPageComponent,
    ViewRecordingsComponent,
    CreateCardSortingTestComponent,
    PerformCardSortingTestComponent,
    ViewResultsOfTestComponent,
    ResultsVisualizationComponent,
    DynamicResultVisualizationComponent,
    LikertScaleVisualizationComponent,
    MultipleChoiceVisualizationComponent,
    MultipleAnswerVisualizationComponent,
    TextVisualizationComponent,
    PageNotFoundComponent,
    LoadTestsComponent,
    ViewResultsOfTestComponent,
    ExportButtonComponent,
    ViewTestsComponent,
  ],
  imports: [
    ChartsModule,
    MaterialModule,
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SocialLoginModule,
    FlexLayoutModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    DragDropModule,
    ReactiveFormsModule,
  ],
  providers: [
    PendingChangesGuard,
    {
      provide: AuthServiceConfig,
      useFactory: provideConfig
    },
    ExportButtonComponent,
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
