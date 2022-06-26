import { Component, OnInit } from '@angular/core';
import { Header } from 'src/app/interfaces/header';
import { containerIndicator, Indicator } from 'src/app/interfaces/indicator';
import { ConfigService } from 'src/app/services/config.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {
  header: Header = {
    name: "Indicadores",
    route: "",
    backName: ""
  }
  show = false;
  title: string = "Listado de Indicadores";
  data: containerIndicator[] = [];
  constructor(private _serv: ConfigService) {
  }
  async getIndicators() {
    this._serv.callServiceIndicators("").subscribe(
      (data)=>{
        this.getData(data);
      }
    )
  }
  getData(data: Indicator) {
    this.data.push(data.bitcoin)
    this.data.push(data.dolar)
    this.data.push(data.dolar_intercambio)
    this.data.push(data.euro)
    this.data.push(data.imacec)
    this.data.push(data.ipc)
    this.data.push(data.ivp)
    this.data.push(data.libra_cobre)
    this.data.push(data.tasa_desempleo)
    this.data.push(data.utm)
    this.data.push(data.uf)
    this.data.push(data.tpm)
    this.data.forEach(data => {
      data.onClickInformation = (item) => {
        this.onClickInformation(item);
      }
      data.onClickDetail = (item) => {
        this.onClickDetail(item);
      }
    })
    this.show = true;
  }
  async onClickDetail(item: containerIndicator) {
    console.log(item);
    
    this._serv.redirect("/detailIndicator/" + item.codigo + "/" + item.nombre);
  }
  onClickInformation(item: containerIndicator) {
    console.log(item);
    this._serv.redirect("/chartIndicator/" + item.codigo + "/" + item.nombre);
  }
  ngOnInit(): void {
    this._serv.header = this.header
    this.getIndicators()
  }

}
