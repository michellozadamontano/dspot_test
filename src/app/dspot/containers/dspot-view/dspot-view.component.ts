import { Component, OnInit } from '@angular/core';
import { ICard, IDecks }     from '../../model/decks.inteface';
import { DspotService }      from '../../services/dspot.service';
//----------------------------------------------------------------------------
// Imports Lodash
//----------------------------------------------------------------------------
import * as _                from 'lodash';

@Component({
  selector: 'app-dspot-view',
  templateUrl: './dspot-view.component.html',
  styleUrls: ['./dspot-view.component.scss']
})
export class DspotViewComponent implements OnInit {
  
  public decks      : IDecks[] = [];

  public hearts     : ICard[] = [];
  public diamonds   : ICard[] = [];
  public clubs      : ICard[] = [];
  public spades     : ICard[] = [];

  public total_decks! : number;


  constructor(private dspotService : DspotService) { }

  ngOnInit(): void {
    
  }

  formSubmit(form : any)
  {
    // the Idea here is to call an endpoint
    console.log(form);
      
  }
  clickButton()
  {
    this.getCasino();
  }
  getCasino()
  {
    this.dspotService.casino().subscribe(resp => {

      let listOfDiamonds  = resp.filter((x: any) => x.suit == 'diamonds');
      let listOfHearts    = resp.filter((x: any) => x.suit == 'hearts');
      let listOfClubs     = resp.filter((x: any) => x.suit == 'clubs');
      let listOfSpades    = resp.filter((x: any) => x.suit == 'spades');

        
     
      let possibleDecks = Math.trunc(resp.length / 52); // here I defined the possible iteration
      
      
      for (let index    = 0; index < possibleDecks; index++) 
      {       
        let diamondFoundIndexes: any[] = []; 
        listOfDiamonds.forEach((element: any) => {
          let findObjet = this.diamonds.find(x => x.value == element.value);
          let findIndex = listOfDiamonds.findIndex((x: any) => x == element);
          if (!findObjet)
          {
            this.diamonds.push(element); 
            //here I'm going to store the indexes founded to delete it later
            diamondFoundIndexes.push(findIndex);         
          }        

        });       
        
        // now I delete the list card founded 
        if (diamondFoundIndexes.length > 0)
        {
          diamondFoundIndexes.forEach(element => {
            listOfDiamonds.splice(element, 1);             
          });
        }      

        let heartFoundIndexes: any[] = [];
        listOfHearts.forEach((element: any) => {
          let findObjet = this.hearts.find(x => x.value == element.value);
          let findIndex = listOfHearts.findIndex((x: any) => x == element);
          if (!findObjet)
          {
            this.hearts.push(element)
            heartFoundIndexes.push(findIndex);
          }       
  
        });
       
        // now I delete the list card founded 
        if (heartFoundIndexes.length > 0)
        {
          heartFoundIndexes.forEach(element => {
            listOfHearts.splice(element, 1);
            
          });
        }

        let clubsFoundIndexes: any[] = [];
        listOfClubs.forEach((element: any) => {
          let findObjet = this.clubs.find(x => x.value == element.value);
          let findIndex = listOfClubs.findIndex((x: any) => x == element);
          if (!findObjet)
          {
            this.clubs.push(element)  
            clubsFoundIndexes.push(findIndex);       
          }       
  
        });
        
        // now I delete the list card founded 
        if (clubsFoundIndexes.length > 0)
        {
          clubsFoundIndexes.forEach(element => {
            listOfClubs.splice(element, 1);
            
          });
        }

        let spadesFoundIndexes: any[] = [];
        listOfSpades.forEach((element: any) => {
          let findObjet = this.spades.find(x => x.value == element.value);
          let findIndex = listOfSpades.findIndex((x: any) => x == element);
          if (!findObjet)
          {
            this.spades.push(element);
            spadesFoundIndexes.push(findIndex);
            
          }       
  
        });
        
        // now I delete the list card founded 
        if (spadesFoundIndexes.length > 0)
        {
          spadesFoundIndexes.forEach(element => {
          listOfSpades.splice(element, 1);
            
          });
        }
        // Here I'm gonna check if already have at least one decks of card
        if (this.hearts.length == 13 && this.clubs.length == 13 && this.diamonds.length == 13 && this.spades.length == 13)
        {
          let deck : IDecks = {
            hearts : this.hearts,
            clubs  : this.clubs,
            diamonds: this.diamonds,
            spades : this.spades
          }
          this.decks.push(deck);
          // here I reset all the arrays
          this.hearts   = [];
          this.clubs    = [];
          this.diamonds = [];
          this.spades   = [];
        }
        
      }  
      this.total_decks = this.decks.length;
      console.log('there is ' + this.decks.length + ' decks of cards');      
      console.log(this.decks);
    });
    this.total_decks = this.decks.length;
  }
  

}
