import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Header } from 'src/app/interfaces/header';
import { DetailIndicators, DetailSerie } from 'src/app/interfaces/indicator';
import { ConfigService } from 'src/app/services/config.service';
declare var google: any;
@Component({
  selector: 'app-chart-indicators',
  templateUrl: './chart-indicators.component.html',
  styleUrls: ['./chart-indicators.component.sass']
})
export class ChartIndicatorsComponent implements OnInit {
  detailIndicator: DetailSerie[] | undefined;
  data: any;
  show = false;
  obj: any;
  price: number = 0;
  nombre: string = "";
  unMed: string = "";
  fecha: string = "";
  header: Header = {
    route: "/home",
    backName: "Indicadores"
  }
  constructor(
    private route: ActivatedRoute,
    private _serv: ConfigService
  ) {

  }
  async getChart() {
    if (this.detailIndicator !== undefined) {
      if (this.detailIndicator.length > 0) {
        this.obj = this.detailIndicator?.slice(0, 10).map((item, key) => {
          return [this._serv.getFormattedDate(new Date(item.fecha)), item.valor]
        })
        if (this.obj.length > 0) {
          this.obj.unshift(["Fecha", "Valor"])
          localStorage.setItem("chart", JSON.stringify(this.obj))
          google.charts.load('current', { 'packages': ['corechart'] });
          google.charts.setOnLoadCallback(this.drawChart)
        }
      }
    }
  }
  async drawChart() {
    let chartData = await localStorage.getItem("chart") || "";
    if (chartData !== "" && chartData !== undefined) {
      let obj = JSON.parse(chartData);
      var data = google.visualization.arrayToDataTable(
        obj
      );

      var options = {
        title: 'Indicadores',
        curveType: 'function',
        legend: { position: 'bottom' }
      };
      setTimeout(() => {
        var chart = new google.visualization.LineChart(document.getElementById('curve_chart'));

        chart.draw(data, options)
      }, 1000);
    }
  }
  async getDetail(parameter: string) {
    (await this._serv.callServiceDetailIndicator(parameter)).subscribe(
      async (data) => {
        if (data != undefined) {
          this.getData(data)
        }
      }
    )
  }
  async getData(data:DetailIndicators){
    this.detailIndicator = data.serie || [];
    this.price = data.serie[0].valor;
    this.nombre = data.nombre;
    this.unMed = data.unidad_medida;
    this.fecha = this._serv.getFormattedDate(new Date(data.serie[0].fecha));
    console.log(this.price);

    await this.getChart();
    this.show = true;
  }
  ngOnInit(): void {
    this._serv.header = this.header
    this.route.params.subscribe(params => {
      this.getDetail(params['id']);
      this.header.name = params['name']
    });
  }

}
