import React from "react";
import KakaoMap from "../map/KakaoMap";
import { StHomeMap } from "@/app/styledComponents/home/StHomeMap";

const HomeMap = () => {
  return (
    <StHomeMap>
      <KakaoMap />
    </StHomeMap>
  );
};

export default HomeMap;
