import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import {
  MdButtonModule,
  MdToolbarModule,
  MdSidenavModule,
  MdIconModule,
  MdListModule,
  MdCardModule,
  MdInputModule
} from '@angular/material';
import { UserService } from './services/users';
import { ChannelService } from './services/channels';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpModule,
    MdButtonModule,
    MdToolbarModule,
    MdSidenavModule,
    MdIconModule,
    MdListModule,
    MdCardModule,
    MdInputModule
  ],
  providers: [UserService, ChannelService],
  bootstrap: [AppComponent]
})
export class AppModule { }
