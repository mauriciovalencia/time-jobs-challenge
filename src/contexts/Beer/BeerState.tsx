import { useReducer } from "react";
import BeerPriceListData from "../../data/BeerPriceListData";
import BeerEntity from "../../entities/BeerEntity";
import BeerServiceImpl from "../../services/BeerServiceImpl";
import { GET_BEERS, GET_BEER_DETAIL_BY_ID, TypeBeerState } from "../Types";
import BeerContext from "./BeerContext";
import BeerReducer from "./BeerReducer";

const BeerState = (props: any) => {
  const initialState: TypeBeerState = {
    beers: [new BeerEntity()],
    selectedBeer: [new BeerEntity()],
    getBeersByName: (name: string) => { },
    getBeerById: (id: number) => { },
  };

  const [state, dispatch] = useReducer(BeerReducer, initialState);


  const setBeerPrice = (beers: [BeerEntity]) => {
    return beers.map((beer) => {
      beer.price = BeerPriceListData[beer.id]?.price;
      return beer;
    });
  }

  const getBeersByName = async (name: string) => {
    const response = await new BeerServiceImpl().getBeerByName(name);
    console.log("getBeers", response?.data);
    dispatch({ type: GET_BEERS, payload: setBeerPrice(response?.data) || [new BeerEntity()] });
  };

  const getBeerById = async (id: number) => {
    const response = await new BeerServiceImpl().getBeerById(id);
    // console.log("getBeer", response);
    dispatch({ type: GET_BEER_DETAIL_BY_ID, payload: setBeerPrice(response?.data) || [new BeerEntity()] });
  };

  return (
    <BeerContext.Provider value={{
      beers: state.beers,
      selectedBeer: state.selectedBeer,
      getBeersByName,
      getBeerById,
    }}>
      {props.children}
    </BeerContext.Provider>
  );
};

export default BeerState;
