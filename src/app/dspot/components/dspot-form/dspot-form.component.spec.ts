import { ComponentFixture, TestBed }            from '@angular/core/testing';
import { RouterTestingModule }                  from '@angular/router/testing';
import { MatMenuModule }                        from '@angular/material/menu';
import { HttpClientModule }                     from '@angular/common/http';
import { DspotFormComponent }                   from './dspot-form.component';
import { FormsModule, ReactiveFormsModule }     from '@angular/forms';
import { MatFormFieldModule }                   from '@angular/material/form-field';


describe('DspotFormComponent', () => {
    let comp : DspotFormComponent;
    let fixture: ComponentFixture<DspotFormComponent>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        MatMenuModule,
        MatFormFieldModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule
      ],
      declarations: [        
        DspotFormComponent
      ],
     
    }).compileComponents();    
  });

  it('should create the DspotFormComponent', () => {
    fixture = TestBed.createComponent(DspotFormComponent);   
    comp    = fixture.componentInstance;
    expect(comp).toBeTruthy();
  });

  it('form invalid when empty', () => {
    fixture = TestBed.createComponent(DspotFormComponent);   
    comp    = fixture.componentInstance;

    comp.form.controls.name.setValue('');
    comp.form.controls.email.setValue('');
    comp.form.controls.lastName.setValue('');
    comp.form.controls.age.setValue('');
    comp.form.controls.url.setValue('');
    expect(comp.form.valid).toBeFalsy();
  });

  it('name field validity', () => {
    fixture = TestBed.createComponent(DspotFormComponent);   
    comp    = fixture.componentInstance;

    const name = comp.form.controls.name;
    expect(name.valid).toBeFalsy();

    name.setValue('');
    expect(name.hasError('required')).toBeTruthy();

  });

  it('email field validity', () => {
    fixture = TestBed.createComponent(DspotFormComponent);   
    comp    = fixture.componentInstance;

    const email = comp.form.controls.email;
    expect(email.valid).toBeFalsy();

    email.setValue('');
    expect(email.hasError('required')).toBeTruthy();
  });

  it('form should be valid', () => {
    fixture = TestBed.createComponent(DspotFormComponent);   
    comp    = fixture.componentInstance;

    comp.form.controls.name.setValue('michel');
    comp.form.controls.email.setValue('michellm8426@gmail.com');
    comp.form.controls.lastName.setValue('Lozada');
    comp.form.controls.age.setValue(38);
    comp.form.controls.url.setValue('http://google.com');
    expect(comp.form.valid).toBeTruthy();
  });
  
 
});