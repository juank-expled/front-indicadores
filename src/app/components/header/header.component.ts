import { Component, Input, OnInit } from '@angular/core';
import { Header } from 'src/app/interfaces/header';
import { ConfigService } from 'src/app/services/config.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {
  @Input() header:Header | undefined;
  constructor(private _config:ConfigService) { }
  back(route:string){
    if(route)
      this._config.redirect(route);
  }

  ngOnInit(): void {
  }
}
