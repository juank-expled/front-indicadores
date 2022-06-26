import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Header } from 'src/app/interfaces/header';
import { DetailSerie } from 'src/app/interfaces/indicator';
import { ConfigService } from 'src/app/services/config.service';

@Component({
  selector: 'app-detail-indicator',
  templateUrl: './detail-indicator.component.html',
  styleUrls: ['./detail-indicator.component.sass']
})
export class DetailIndicatorComponent implements OnInit {
  detailIndicator: DetailSerie[] | undefined;
  header: Header = {
    route: '/home',
    backName: 'Indicadores'
  }
  show = false;
  constructor(
    private route: ActivatedRoute,
    private _serv: ConfigService
  ) {
  }
  async getDetail(parameter: string) {
    (await this._serv.callServiceDetailIndicator(parameter)).subscribe(
      (data)=>{
        this.detailIndicator = data.serie;
        this.show = true;
      }
    )

  }
  ngOnInit(): void {
    this._serv.header = this.header
    this.route.params.subscribe(params => {
      this.getDetail(params['id']);
      this.header.name = params['name']
    });
  }

}
