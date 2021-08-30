import { AxiosResponse } from "axios";
import { BeerControllerApi } from "../client";
import BeerEntity from "../entities/BeerEntity";
import BeerService from "./BeerService";

class BeerServiceImpl implements BeerService {
  private beerController: BeerControllerApi;
  constructor() {
    this.beerController = new BeerControllerApi();
  }

  async getAllBeers(): Promise<AxiosResponse<[BeerEntity]>> {
    return this.beerController.getBeerUsingGET({
      query: {},
    });
  }

  async getBeerByName(name: string): Promise<AxiosResponse<[BeerEntity]>> {
    return this.beerController.getBeerUsingGET({
      query: {
        beer_name: name,
      },
    });
  }

  async getBeerById(id: number): Promise<AxiosResponse<[BeerEntity]>> {
    return this.beerController.getBeerUsingGET({
      query: {
        ids: "2|4|7",
      },
    });
  }
}

export default BeerServiceImpl;
