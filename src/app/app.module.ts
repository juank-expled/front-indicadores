import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { ListInidicatorsComponent } from './components/list-inidicators/list-inidicators.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './view/home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { DetailIndicatorComponent } from './view/detail-indicator/detail-indicator.component';
import { CommonModule } from '@angular/common';
import { ChartIndicatorsComponent } from './view/chart-indicators/chart-indicators.component';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    ListInidicatorsComponent,
    HeaderComponent,
    HomeComponent,
    DetailIndicatorComponent,
    ChartIndicatorsComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CommonModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
