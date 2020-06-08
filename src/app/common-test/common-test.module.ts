import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MaterialModule } from '../material/material.module';
import { AppRoutingModule } from '../app-routing/app-routing.module';
import { AuthServiceConfig, SocialLoginModule } from 'angularx-social-login';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from '../app.component';
import { HeaderComponent } from '../components/header/header.component';
import { HomePageComponent } from '../components/home-page/home-page.component';
import { CreateTestsComponent } from '../components/create-tests/create-tests.component';
import { SignInOutComponent } from '../components/sign-in-out/sign-in-out.component';
import { RecordingPermissionViewComponent } from '../components/recording-permission-view/recording-permission-view.component';
import { ScreenRecordingComponent } from '../components/screen-recording/screen-recording.component';
import { LoginPageComponent } from '../components/login-page/login-page.component';

const config = new AuthServiceConfig([]);

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
    RecordingPermissionViewComponent,
    ScreenRecordingComponent,
    LoginPageComponent],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    SocialLoginModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientTestingModule,
    MaterialModule,
    AppRoutingModule
  ],
  exports: [
    MaterialModule,
    AppRoutingModule,
    FormsModule,
    HttpClientTestingModule,
    ReactiveFormsModule
  ],
  providers: [
    {
      provide: AuthServiceConfig,
      useFactory: provideConfig
    }
  ]
})
export class CommonTestModule { }
