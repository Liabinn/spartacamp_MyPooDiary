import React from "react";
import { StHomeMap } from "@/app/styledComponents/home/StHomeMap";
import Spacer from "../ui/Spacer";
import KakaoMap from "../map/KakaoMap";

const HomeMap = () => {
  return (
    <StHomeMap>
      <p>📌 현재 나의 위치: </p>
      <Spacer y={20} />
      <KakaoMap />
    </StHomeMap>
  );
};

export default HomeMap;
