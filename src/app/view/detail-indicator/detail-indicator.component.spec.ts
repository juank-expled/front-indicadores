import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { DetailIndicatorComponent } from './detail-indicator.component';
import { RouterTestingModule } from '@angular/router/testing';
import { ConfigService } from 'src/app/services/config.service';
import { Header } from 'src/app/interfaces/header';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from "@angular/core";
import { of } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

describe('DetailIndicatorComponent', () => {
  let component: DetailIndicatorComponent;
  let fixture: ComponentFixture<DetailIndicatorComponent>;
  const HeaderMock: Header = {
    name: 'Indicadores',
    route: '/home',
    backName: ''
  }
  const spyService = jasmine.createSpyObj<ConfigService>(['callServiceDetailIndicator', 'header']);
  beforeEach(async () => {
    // spyService.callServiceDetailIndicator
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule.withRoutes([]), HttpClientTestingModule],
      declarations: [DetailIndicatorComponent],
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
    fixture = TestBed.createComponent(DetailIndicatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
    component.header = HeaderMock;
    component.show = true;
    component.ngOnInit()
  });
  it('on init', () => {
    spyService.header = component.header;
  })
});
