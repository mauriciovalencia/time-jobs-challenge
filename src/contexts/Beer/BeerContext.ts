import { createContext } from "react";
import BeerEntity from "../../entities/BeerEntity";
import { TypeBeerState } from "../Types";

const BeerContext = createContext<TypeBeerState>({
  beers: [new BeerEntity()],
  selectedBeer: [new BeerEntity()],
  getBeersByName: (key:string) => {},
  getBeerById: (key:number) => {},
});

export default BeerContext;
