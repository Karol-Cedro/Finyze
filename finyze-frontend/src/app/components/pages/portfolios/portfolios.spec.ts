import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Portfolios } from './portfolios';
import { PortfoliosService } from '../../../services/portfolios.service';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';

describe('Portfolios', () => {
  let component: Portfolios;
  let fixture: ComponentFixture<Portfolios>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Portfolios],
      providers: [
        PortfoliosService,
        provideHttpClient(withInterceptorsFromDi()),
        provideHttpClientTesting()
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(Portfolios);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
