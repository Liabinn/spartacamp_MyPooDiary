import React from "react";
import { StHomeMap } from "@/app/styledComponents/home/StHomeMap";
import Spacer from "../ui/Spacer";
// import KakaoMap from "../map/KakaoMap";
import Script from "next/script";
import KakaoMapTest from "../map/StoreMap";
import LocationList from "./locationList";
import StoreMap from "../map/StoreMap";
import RestroomMap from "../map/RestroomMap ";

const KAKAO_SDK_URL = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_KAKAO_APP_JS_KEY}&libraries=services,clusterer&autoload=false`;
const HomeMap = () => {
  return (
    <StHomeMap>
      {/* 카카오맵에서 스크립트를 외부로 빼서 사용해서 추가해준 스크립트입니다 API연결이에요 */}
      <Script src={KAKAO_SDK_URL} strategy="beforeInteractive" />
      <Spacer y={20} />
      <StoreMap />
      <RestroomMap />
    </StHomeMap>
  );
};

export default HomeMap;
