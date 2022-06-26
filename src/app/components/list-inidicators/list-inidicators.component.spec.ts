import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ConfigService } from 'src/app/services/config.service';

import { ListInidicatorsComponent } from './list-inidicators.component';

describe('ListInidicatorsComponent', () => {
  let component: ListInidicatorsComponent;
  let fixture: ComponentFixture<ListInidicatorsComponent>;
  const spyService = jasmine.createSpyObj<ConfigService>(['callServiceIndicators', 'redirect']);
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule.withRoutes([]), HttpClientTestingModule],
      declarations: [ ListInidicatorsComponent ],
      providers: [
        {provide: ConfigService, useValue: spyService}
      ],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListInidicatorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
