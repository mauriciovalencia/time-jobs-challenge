import BeerEntity from "../entities/BeerEntity";

export type TypeBeerState = {
  beers: [BeerEntity];
  selectedBeer: [BeerEntity];
  getBeersByName: (name:string) => void;
  getBeerById: (id:number) => void;
};

export const GET_BEERS = "GET_BEERS";
export const GET_BEER_DETAIL_BY_ID = "GET_BEER_DETAIL";
