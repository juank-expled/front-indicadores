import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './view/home/home.component';
import { DetailIndicatorComponent } from './view/detail-indicator/detail-indicator.component';
import { ChartIndicatorsComponent } from './view/chart-indicators/chart-indicators.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'detailIndicator/:id/:name', component: DetailIndicatorComponent },
  { path: 'chartIndicator/:id/:name', component: ChartIndicatorsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
