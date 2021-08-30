interface BeerModel {
  id: number; //1
  name: string; //"Buzz",
  tagline: string; //"A Real Bitter Experience.";
  first_brewed: string; //"09/2007";
  description: string; //"A light, crisp and bitter IPA brewed with English and American hops. A small batch brewed only once.";
  image_url: string; //"https://images.punkapi.com/v2/keg.png";
  abv: number; //4.5;
  ibu: number; //60;
  target_fg: number; //1010;
  target_og: number; //1044;
  ebc: number; //20;
  srm: number; //10;
  ph: number; //4.4;
  attenuation_level: number; //75;
  volume: {
    value: number; //20;
    unit: string; //"litres";
  };
  boil_volume: {
    value: number; //25;
    unit: string; //"litres";
  };
  method: {
    mash_temp: {
      temp: {
        value: number; // 64;
        unit: string; // "celsius";
      };
      duration: number; //75;
    }[];
    fermentation: {
      temp: {
        value: number; //19;
        unit: string; //"celsius";
      };
    };
    twist: null;
  };
  ingredients: {
    malt: {
      name: string; //"Maris Otter Extra Pale";
      amount: {
        value: number; //3.3;
        unit: string; //"kilograms";
      };
    }[];
    hops: {
      name: string; //"Fuggles";
      amount: {
        value: number; //25;
        unit: string; //"grams";
      };
      add: string; //"start";
      attribute: string; //"bitter";
    }[];
    yeast: string; //"Wyeast 1056 - American Ale™";
  };
  food_pairing: [];
  brewers_tips: string; //"The earthy and floral aromas from the hops can be overpowering. Drop a little Cascade in at the end of the boil to lift the profile with a bit of citrus.";
  contributed_by: string; //"Sam Mason <samjbmason>";
}

export default BeerModel;
