import { Component } from '@angular/core';
//----------------------------------------------------------------------------
// Imports Routes
//----------------------------------------------------------------------------
import { ActivatedRoute }               from '@angular/router';
import { Router}                        from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular';

  constructor(private router : Router)
  {

  }
  dspotView()
  {
    this.router.navigate(['/dspot']);
  }
  home()
  {
    this.router.navigate(['/']);
  }

}
