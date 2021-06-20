import { TestBed }              from '@angular/core/testing';
import { RouterTestingModule }  from '@angular/router/testing';
import { MatMenuModule }        from '@angular/material/menu';
import { AppComponent }         from './app.component';
import { MatToolbarModule }     from '@angular/material/toolbar';
import { MatIconModule }        from '@angular/material/icon';


describe('AppComponent', () => {   
  beforeEach(async () => {    
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        MatMenuModule,
        MatToolbarModule,
        MatIconModule,
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();   
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
   
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
 
});
