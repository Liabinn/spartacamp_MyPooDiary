import React from "react";
import { StHomeMap } from "@/app/styledComponents/home/StHomeMap";
import Spacer from "../ui/Spacer";
import KakaoMap from "../map/KakaoMap";
import Script from "next/script";
const KAKAO_SDK_URL = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_KAKAO_APP_JS_KEY}&libraries=services,clusterer&autoload=false`;
const HomeMap = () => {
  return (
    <StHomeMap>
      {/* 카카오맵에서 스크립트를 외부로 빼서 사용해서 추가해준 스크립트입니다 API연결이에요 */}
      <Script src={KAKAO_SDK_URL} strategy="beforeInteractive" />
      <p>📌 현재 나의 위치: </p>
      <Spacer y={20} />
      <KakaoMap />
    </StHomeMap>
  );
};

export default HomeMap;
