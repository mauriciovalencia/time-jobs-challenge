
import { useEffect, useState } from "react";
import { Button, Card, Container, Divider, Grid, Header, Icon, Image, Search, Segment } from "semantic-ui-react";
import BeerEntity from "../../entities/BeerEntity";

type BeerCardProps = {
    beerEntity: BeerEntity;
};

const BeerCardDetail = ({ beerEntity }: BeerCardProps) => {
    const [beer, setBeer] = useState(new BeerEntity());

    useEffect(() => {
        if (beerEntity !== undefined) {
            setBeer(beerEntity);
        }
    }, [beer, beerEntity]);

    return (
        <>
            <Container>
                <Segment >
                    <Grid columns={4} textAlign='center'>                    
                        <Grid.Row verticalAlign='middle'>
                            <Grid.Column>
1
                            </Grid.Column>

                            <Grid.Column>
                            <Image src={beer?.image_url || ""} size="mini" centered />
                            </Grid.Column>
                        </Grid.Row>
                        <Grid.Row verticalAlign='middle'>
                            <Grid.Column>
3
                            </Grid.Column>

                            <Grid.Column>
4
                            </Grid.Column>
                        </Grid.Row>                        
                    </Grid>
                </Segment>
                {/*<Card centered={true}>
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
                </Card>*/}
            </Container>
        </>
    );
};
export default BeerCardDetail;
