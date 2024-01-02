import HomeMap from "@/components/home/homeMap";
import MemberSection from "@/components/home/memberSection";
import Script from "next/script";
import React from "react";

const KAKAO_SDK_URL = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_KAKAO_APP_JS_KEY}&libraries=services,clusterer&autoload=false`;

const HomePage = () => {
  return (
    <div>
      <Script src={KAKAO_SDK_URL} strategy="beforeInteractive" />
      <HomeMap></HomeMap>
      <MemberSection></MemberSection>
    </div>
  );
};

export default HomePage;
