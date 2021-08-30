import { AxiosResponse } from "axios";
import BeerEntity from "../entities/BeerEntity";

export default interface BeerService {
  getAllBeers: () => Promise<AxiosResponse<[BeerEntity]>>;
  getBeerByName: (name: string) => Promise<AxiosResponse<[BeerEntity]>>;  
  getBeerById: (id: number) => Promise<AxiosResponse<[BeerEntity]>>;
}
