import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AngularFireModule} from 'angularfire2'
import { AngularFireDatabaseModule }from 'angularfire2/database';
import { AngularFireAuthModule }from 'angularfire2/auth';
import { AngularFirestoreModule }from 'angularfire2/firestore';
import { AngularFireStorage }from 'angularfire2/storage';

import { environment } from '../environments/environment';
import { BookInfoComponent } from './book-info/book-info.component';

export const firebaseConfig = environment.firebaseConfig;

@NgModule({
  declarations: [
    AppComponent,
    BookInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AngularFirestoreModule,    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
