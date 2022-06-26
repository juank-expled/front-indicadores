import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ConfigService } from 'src/app/services/config.service';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from "@angular/core";
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { HomeComponent } from './home.component';
import { Header } from 'src/app/interfaces/header';
import { HOME_INDICATOR_MOCK } from 'src/app/moks/mockData';
import { Indicator } from 'src/app/interfaces/indicator';
import { Subject } from 'rxjs/internal/Subject';
import { BehaviorSubject } from 'rxjs';
import { RouterTestingModule } from '@angular/router/testing';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let subjIdicators: Subject<Indicator>;
  const HeaderMock: Header = {
    name: "Indicadores",
    route: "",
    backName: ""
  }
  subjIdicators = new BehaviorSubject(HOME_INDICATOR_MOCK);
  const spyService = jasmine.createSpyObj<ConfigService>(['callServiceIndicators', 'redirect']);
  beforeEach((() => {
    spyService.callServiceIndicators.and.returnValue(subjIdicators);
    TestBed.configureTestingModule({
      imports: [RouterTestingModule.withRoutes([]), HttpClientTestingModule],
      declarations: [HomeComponent],
      providers: [
        {provide: ConfigService, useValue: spyService}
      ],
      schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();
  }));
  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    subjIdicators.next(HOME_INDICATOR_MOCK)
  });
  it('should create', () => {
    expect(component).toBeTruthy();
    expect(component.header).toEqual(HeaderMock);
    expect(component.title).toEqual("Listado de Indicadores");
    expect(component.show).toEqual(false);
    
  });
  it('getIndicators', () => {
    const dataMok = HOME_INDICATOR_MOCK;
    component.getData(dataMok)
    spyService.callServiceIndicators("");
    component.getIndicators();
    component.ngOnInit();
  })
  it('detail information', () => {
    component.onClickDetail({
      codigo: "dolar",
      nombre: "Dólar observado",
      unidad_medida: "Pesos",
      fecha: "2022-06-24T04:00:00.000Z",
      valor: 898.8,
    })
    component.onClickInformation({
      codigo: "dolar",
      nombre: "Dólar observado",
      unidad_medida: "Pesos",
      fecha: "2022-06-24T04:00:00.000Z",
      valor: 898.8,
    })
  })
});
