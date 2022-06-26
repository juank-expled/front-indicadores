import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { ConfigService } from './services/config.service';

describe('AppComponent', () => {
  const spyService = jasmine.createSpyObj<ConfigService>(['header']);

  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [
        { provide: ConfigService, useValue: spyService }
      ],
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  });
  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it('open', () => {
    component.title = "Indicadores";
  })
});
