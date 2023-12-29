import KakaoMap from "@/components/map/KakaoMap";
import KakaoMap2 from "@/components/map/KakaoMap2";
import Script from "next/script";
import React from "react";
const KAKAO_SDK_URL = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_KAKAO_APP_JS_KEY}&libraries=services,clusterer&autoload=false`;
const MapPage = () => {
  return (
    <div>
      <Script src={KAKAO_SDK_URL} strategy="beforeInteractive" />
      <main className="w-screen h-screen left-0 top-0">
        {/* <KakaoMap /> */}
        <KakaoMap2 />
      </main>
    </div>
  );
};

export default MapPage;
