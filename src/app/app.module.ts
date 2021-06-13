import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Router, RouterModule, Routes } from '@angular/router';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FormsModule } from '@angular/forms';

import { MatTabsModule } from '@angular/material/tabs';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';

import { MatFormFieldModule } from '@angular/material/form-field';

import { GaugeModule } from 'angular-gauge';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { HttpClientModule } from '@angular/common/http';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { HomeComponent } from './components/home/home.component';
import { HttpServ } from './services/httpserv.service';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  imports: [
    RouterModule.forRoot([]),
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    MatFormFieldModule,
    MatSelectModule,
    MatIconModule,
    MatTabsModule,
    AppRoutingModule,
    GaugeModule.forRoot()
  ],
  declarations: [
    AppComponent,
    HelloComponent,
    SearchBarComponent,
    HomeComponent
  ],
  bootstrap: [AppComponent],
  providers: [HttpServ]
})
export class AppModule {}
