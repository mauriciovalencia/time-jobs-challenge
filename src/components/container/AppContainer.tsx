import AppHeader from "../../components/header/AppHeader";
import BeerState from "../../contexts/Beer/BeerState";
import BeerList from "../products/BeerList";
import BeerSearch from "../products/BeerSearch";

const AppContainer = () => {
  return (
    <BeerState>
      <AppHeader />
      <BeerSearch />
      <BeerList />
    </BeerState>
  );
};

export default AppContainer;
