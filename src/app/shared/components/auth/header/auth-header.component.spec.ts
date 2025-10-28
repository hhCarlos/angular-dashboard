import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AuthHeaderComponent } from './auth-header.component';
import { provideRouter } from '@angular/router';

describe('AuthHeaderComponent', () => {
  let fixture: ComponentFixture<AuthHeaderComponent>;
  let component: AuthHeaderComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AuthHeaderComponent],
      providers: [provideRouter([])]
    }).compileComponents();

    fixture = TestBed.createComponent(AuthHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
