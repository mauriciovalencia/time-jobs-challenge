
import { useEffect, useState } from "react";
import { Card, Image } from "semantic-ui-react";
import BeerEntity from "../../entities/BeerEntity";

type BeerCardProps = {
  beerEntity: BeerEntity;
};

const BeerCard = ({ beerEntity }: BeerCardProps) => {
  const [beer, setBeer] = useState(new BeerEntity());

  useEffect(() => {
    if (beerEntity !== undefined) {
      setBeer(beerEntity);
    }
  }, [beer, beerEntity]);

  return (
    <>
      <Card centered={true}>
        <Card.Content>
          <Card.Meta>
            <strong style={{ color: "black" }}>{`${beer?.name || ""}`}</strong>
          </Card.Meta>
        </Card.Content>
        <Image src={beer?.image_url || ""} size="mini" centered />
        <Card.Content>
          <Card.Meta>
            <strong style={{ color: "black" }}>{`${beer?.price === undefined ? "" : '$' + beer?.price}`}</strong>
          </Card.Meta>
          <Card.Meta>
            <strong style={{ color: "black" }}>{`${beer?.name || ""}`}</strong>
          </Card.Meta>
        </Card.Content>
      </Card>
    </>
  );
};
export default BeerCard;
