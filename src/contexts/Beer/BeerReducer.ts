import { GET_BEERS, GET_BEER_DETAIL_BY_ID, TypeBeerState } from "../Types";

const BeerReducer = (state: TypeBeerState, action: { payload: any; type: string; }) => {
  const { payload, type } = action;
  switch (type) {
    case GET_BEERS:
      return {
        ...state,
        beers: payload,
      };
    case GET_BEER_DETAIL_BY_ID:
      return {
        ...state,
        selectedBeer: payload,
      };
    default:
      return state;
  }
};
export default BeerReducer;
