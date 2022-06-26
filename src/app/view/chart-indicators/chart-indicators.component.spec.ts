import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ConfigService } from 'src/app/services/config.service';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from "@angular/core";
import { ChartIndicatorsComponent } from './chart-indicators.component';
import { ActivatedRoute } from '@angular/router';
import { BehaviorSubject, of } from 'rxjs';
import { Header } from 'src/app/interfaces/header';
import { DETAIL_INDICATOR_JSON } from 'src/app/moks/IndicatorMok';
describe('ChartIndicatorsComponent', () => {
  let component: ChartIndicatorsComponent;
  let fixture: ComponentFixture<ChartIndicatorsComponent>;
  const HeaderMock: Header = {
    name: 'Indicadores',
    route: '/home',
    backName: ''
  }
  const subjIdicators = new BehaviorSubject(DETAIL_INDICATOR_JSON);

  let google: any;
  const spyService = jasmine.createSpyObj<ConfigService>(['callServiceDetailIndicator', 'redirect', 'getFormattedDate']);
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule.withRoutes([]), HttpClientTestingModule],
      declarations: [ChartIndicatorsComponent],
      providers: [
        { provide: ConfigService, useValue: spyService },
        {
          provide: ActivatedRoute,
          useValue: {
            params: of({ id: 'bitcoin', nombre: 'Bitcoin' })
          }
        }
      ],
      schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartIndicatorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
    component.header = HeaderMock;
    component.show = true;
    component.ngOnInit();
  });
  it('getChart', () => {
    component.detailIndicator = DETAIL_INDICATOR_JSON.serie;
    component.getChart();
    component.detailIndicator = [];
    component.getChart();
  });
  it('getDetail', () => {
    component.getData(DETAIL_INDICATOR_JSON)
  })
});
