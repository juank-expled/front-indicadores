import { HttpClientTestingModule, HttpTestingController, TestRequest } from "@angular/common/http/testing";
import { TestBed } from "@angular/core/testing";
import { RouterTestingModule } from "@angular/router/testing";
import { ConfigService } from "./config.service"
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from "@angular/core";
import { HOME_INDICATOR_MOCK } from "../moks/mockData";
import { environment } from '../environments/envairoment';
import { BehaviorSubject } from "rxjs";

describe('ConfigService', () => {
  let service: ConfigService;
  let httpTestingController: HttpTestingController;
  const subjIdicators = new BehaviorSubject(HOME_INDICATOR_MOCK);
  beforeEach(()=>{
    TestBed.configureTestingModule({
      imports: [RouterTestingModule.withRoutes([]), HttpClientTestingModule],
      providers: [ConfigService],
      schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();
  });
  beforeEach(()=>{
    httpTestingController = TestBed.get(HttpTestingController);
    service = TestBed.inject(ConfigService);
  });
  afterEach(() => {
    httpTestingController.verify();
  });
  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('redirect',()=>{
    service.redirect('');
  })
  it('callServiceIndicators', ()=>{
    service.callServiceIndicators("");    
  })
  it('callServiceDetailIndicator', ()=>{
    service.callServiceDetailIndicator("bitcoin");    
  })
  it('getFormattedDate',()=>{
    service.getFormattedDate(new Date);
  })
})