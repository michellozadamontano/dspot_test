//------------------------------------------------------------------------------------------------
// Imports Section (Angular)
//------------------------------------------------------------------------------------------------
import { NgModule }                 from '@angular/core';
import { CommonModule }             from '@angular/common';
import { DspotRoutingModule }       from './routes/dspot-routing.module';
//------------------------------------------------------------------------------------------------
// Imports Section (Form)
//------------------------------------------------------------------------------------------------
import { FormsModule }              from '@angular/forms';
import { ReactiveFormsModule }      from '@angular/forms';
//------------------------------------------------------------------------------------------------
// Imports Section (Material)
//------------------------------------------------------------------------------------------------
import { MatToolbarModule }         from '@angular/material/toolbar';
import { MatIconModule }            from '@angular/material/icon';
import { MatMenuModule }            from '@angular/material/menu';
import { MatButtonModule }          from '@angular/material/button';
import { MatFormFieldModule }       from '@angular/material/form-field';
import { MatInputModule }           from '@angular/material/input';
import { MatCardModule }            from '@angular/material/card';
//------------------------------------------------------------------------------------------------
// Imports Section (Flex)
//------------------------------------------------------------------------------------------------
import { FlexLayoutModule }         from '@angular/flex-layout';
//------------------------------------------------------------------------------------------------
// Imports Section (Views)
//------------------------------------------------------------------------------------------------
import { DspotViewComponent }       from './containers/dspot-view/dspot-view.component';
import { DspotFormComponent }       from './components/dspot-form/dspot-form.component';





@NgModule({
  declarations: [
    DspotViewComponent,
    DspotFormComponent
  ],
  imports: [
    CommonModule,
    DspotRoutingModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatIconModule,
    MatMenuModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule
  ]
})
export class DspotModule { }
