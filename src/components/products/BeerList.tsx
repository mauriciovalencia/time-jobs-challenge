import { useContext } from "react";
import { Card } from "semantic-ui-react";
import BeerContext from "../../contexts/Beer/BeerContext";
import BeerCard from "./BeerCard";
import BeerCardDetail from "./BeerCardDetail";

const BeerList = () => {

  const { beers } = useContext(BeerContext);
  const itemsPerRow = 3;

  return (
    <>
      <Card.Group centered itemsPerRow={itemsPerRow}>
        {beers.map((data, id) => {
          {/* return <BeerCard key={id} beerEntity={data} />; */}
          return <BeerCardDetail key={id} beerEntity={data} />;
        })}
      </Card.Group>
    </>
  );
};

export default BeerList;
