import { Component, EventEmitter, OnInit, Output } from '@angular/core';
//------------------------------------------------------------------------------------------------
// Imports Section (Form)
//------------------------------------------------------------------------------------------------
import { FormBuilder, FormGroup }       from '@angular/forms';
import { Validators }                   from '@angular/forms';

@Component({
  selector: 'app-dspot-form',
  templateUrl: './dspot-form.component.html',
  styleUrls: ['./dspot-form.component.scss']
})
export class DspotFormComponent implements OnInit 
{
  //------------------------------------------------------------------------
  // @Output Published Events Section
  //------------------------------------------------------------------------
  @Output() Add = new EventEmitter<any>();
  //------------------------------------------------------------------------
  // Public Properties Section:
  //------------------------------------------------------------------------
  public urlValidator = '(?:(?:https?|ftp):\/\/)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/\S*)?'
  //------------------------------------------------------------------------
  // Constructor Method Section
  //------------------------------------------------------------------------
  constructor(private fb      : FormBuilder) { }
  
  public form = this.fb.group({
    name     : ['', Validators.required],
    lastName : [''],
    age      : [''],
    email    : ['', Validators.compose([Validators.required, Validators.email])],
    url      : ['', Validators.pattern(this.urlValidator)]
  })

  ngOnInit(): void {
  }
  onSubmit(form: any)
  {
    
    this.Add.emit(form);  
  }
  //------------------------------------------------------------------------
  isValidURL(str: string) {
    // tslint:disable-next-line: max-line-length
    const regexp = /^(?:(?:https?|ftp):\/\/)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/\S*)?$/;

    if (regexp.test(str)) {
        return true;
    } else {
        return false;
    }
}

}
