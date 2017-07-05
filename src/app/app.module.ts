import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { SigninPage } from '../pages/signin/signin';
import { SigninWithEmailPage } from '../pages/signinwithemail/signinwithemail';
import { SignupPage } from '../pages/signup/signup';
import { ResetpasswordPage } from '../pages/resetpassword/resetpassword';

import { AuthService } from '../providers/auth/auth-service';

import { GooglePlus } from '@ionic-native/google-plus';

const firebaseConfig = {
  apiKey: "AIzaSyCKSwciRo4NkHJtHiKWzsyluYxwp_9q1CA",
  authDomain: "ionic-example-96de5.firebaseapp.com",
  databaseURL: "https://ionic-example-96de5.firebaseio.com",
  projectId: "ionic-example-96de5",
  storageBucket: "",
  messagingSenderId: "638933829742"
};

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    SigninPage,
    SigninWithEmailPage,
    SignupPage,
    ResetpasswordPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    SigninPage,
    SigninWithEmailPage,
    SignupPage,
    ResetpasswordPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthService,
    GooglePlus
  ]
})
export class AppModule {}
