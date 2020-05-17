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
import {ViewTestsComponent} from './components/view-tests/view-tests.component';
import { RecordingPermissionViewComponent } from './components/recording-permission-view/recording-permission-view.component';
import { HttpClientModule } from '@angular/common/http';
import { CreateQuestionnaireComponent } from './components/create-questionnaire/create-questionnaire.component';
import { ScreenRecordingComponent } from './components/screen-recording/screen-recording.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import {MatSelectModule} from '@angular/material/select'
import {ReactiveFormsModule} from '@angular/forms';
import {CreateCardSortingTestComponent} from "./components/create-card-sorting-test/create-card-sorting-test.component";
import { PerformCardSortingTestComponent } from './components/perform-card-sorting-test/perform-card-sorting-test.component';
import {DragDropModule} from "@angular/cdk/drag-drop";
import {MatListModule} from "@angular/material/list";
import { MaterialModule } from './material/material.module';
import {MatTabsModule} from "@angular/material/tabs";

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
    ViewTestsComponent,
    RecordingPermissionViewComponent,
    CreateQuestionnaireComponent,
    ScreenRecordingComponent,
    LoginPageComponent,
    CreateCardSortingTestComponent,
    PerformCardSortingTestComponent
  ],
  imports: [
    MaterialModule,
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SocialLoginModule,
    FlexLayoutModule,
    FormsModule,
    HttpClientModule,
    MatSelectModule,
    ReactiveFormsModule,
    DragDropModule,
    MatListModule,
    ReactiveFormsModule,
    MatTabsModule
  ],
  providers: [
    {
      provide: AuthServiceConfig,
      useFactory: provideConfig
    }
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
