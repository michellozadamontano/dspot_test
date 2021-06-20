import { ComponentFixture, TestBed }            from '@angular/core/testing';
import { RouterTestingModule }                  from '@angular/router/testing';
import { MatMenuModule }                        from '@angular/material/menu';
import { DspotViewComponent }                   from './dspot-view.component';
import { DspotService }                         from '../../services/dspot.service';
import { HttpClientModule }                     from '@angular/common/http';
import { DspotFormComponent }                   from '../../components/dspot-form/dspot-form.component';
import { FormsModule, ReactiveFormsModule }     from '@angular/forms';
import { MatFormFieldModule }                   from '@angular/material/form-field';
import { MatCardModule }                        from '@angular/material/card';


describe('DspotViewComponent', () => {
    let comp : DspotViewComponent;
    let fixture: ComponentFixture<DspotViewComponent>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        MatMenuModule,
        MatFormFieldModule,
        MatCardModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule
      ],
      declarations: [
        DspotViewComponent,
        DspotFormComponent
      ],
      providers: [
        DspotViewComponent,
        { provide: DspotService }
      ]
    }).compileComponents();
     // inject both the component and the dependent service.
    comp = TestBed.inject(DspotViewComponent);
  });

  it('should create the DspotViewComponent', () => {
    fixture = TestBed.createComponent(DspotViewComponent);
   
    comp    = fixture.componentInstance;
    expect(comp).toBeTruthy();
  });
  it('should return an integer (Decks Counts)', () => {
    fixture = TestBed.createComponent(DspotViewComponent);
   
    comp    = fixture.componentInstance;   
    comp.getCasino();
    expect(comp.total_decks).toBeGreaterThanOrEqual(0)
   
  });
 
});