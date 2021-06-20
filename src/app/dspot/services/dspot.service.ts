import { Injectable }       from '@angular/core';
import { HttpClient }       from '@angular/common/http';
import { HttpErrorResponse }from '@angular/common/http';
//----------------------------------------------------------------------------
// Imports Rxjs
//----------------------------------------------------------------------------
import { Observable }       from 'rxjs';
import { throwError }       from 'rxjs';
import { BehaviorSubject }  from 'rxjs';
import { tap,  }            from 'rxjs/operators';
import { catchError }       from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DspotService {

    //------------------------------------------------------------------------
    // Constructor Method Section
    //------------------------------------------------------------------------
    constructor(private http: HttpClient) { }
    

    casino(): Observable<any>
    {
      const url = "https://gist.githubusercontent.com/smaugho/25712886c4a7b938fdda2c41d5b0838e/raw/79d2e4f7cfef5ba01c633400dadc81219516b95b/mixed_decks_2";
      return this.http.get<any>(url)
    }
}
