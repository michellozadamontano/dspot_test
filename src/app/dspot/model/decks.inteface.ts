export interface IDecks
{
   hearts     : ICard[];
   diamonds   : ICard[];
   clubs      : ICard[];
   spades     : ICard[];
   
}
export interface ICard
{
    suit?: string;
    value?: number;
}