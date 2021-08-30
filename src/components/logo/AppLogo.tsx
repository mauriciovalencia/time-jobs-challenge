import React from "react";
import { Image } from "semantic-ui-react";
import logoUrl from "../../assets/icons/beer_tomorrow_logo.png";

const AppLogo = () => (
  <Image
    alt="tomorow beer"
    size="huge"
    srcSet={logoUrl}
  />
);

export default AppLogo;
