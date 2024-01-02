"use client";
import KakaoMap from "@/components/map/KakaoMap";
import MapLIst from "@/components/map/MapLIst";
import Script from "next/script";
import React, { useState } from "react";
import * as St from "../../app/styledComponents/map/StMap";
const KAKAO_SDK_URL = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_KAKAO_APP_JS_KEY}&libraries=services,clusterer&autoload=false`;

const MapPage = () => {
  const [keyword, setKeyword] = useState<string>("편의점");
  return (
    <>
      <Script src={KAKAO_SDK_URL} strategy="beforeInteractive" />
      <St.constainer>
        <main className="grow  w-1/2 h-lvh">
          <MapLIst keyword={keyword} setKeyword={setKeyword} />
        </main>
        <main className="flex justify-center items-center w-full h-lvh grow">
          <KakaoMap keyword1={keyword} setKeyword={setKeyword} />
        </main>
      </St.constainer>
    </>
  );
};

export default MapPage;
