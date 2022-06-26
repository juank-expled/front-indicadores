import { Component, Input, OnInit } from '@angular/core';
import { containerIndicator, DetailSerie } from 'src/app/interfaces/indicator';

@Component({
  selector: 'app-list-inidicators',
  templateUrl: './list-inidicators.component.html',
  styleUrls: ['./list-inidicators.component.sass']
})
export class ListInidicatorsComponent implements OnInit {
  @Input() indicators:containerIndicator[] | undefined;
  @Input() detailIndicator:DetailSerie[] | undefined;

  constructor() { 
  }

  ngOnInit(): void {
  }

}
