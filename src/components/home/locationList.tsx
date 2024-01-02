"use client";

import {
  StAddress,
  StListContainer,
  StListWrapper,
  StMapContainer,
  StPlaceName,
  StTab,
  StTabContainer
} from "@/app/styledComponents/home/StLocationList";
import Script from "next/script";
import React, { useState } from "react";
import KakaoMap from "../map/KakaoMap";

const LocationList = () => {
  const [selectedTab, setSelectedTab] = useState("화장실");
  const onClickTabs = (e: React.MouseEvent<HTMLInputElement>) => {
    setSelectedTab(e.currentTarget.innerText);
  };

  const KAKAO_SDK_URL = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_KAKAO_APP_JS_KEY}&libraries=services,clusterer&autoload=false`;

  return (
    <>
      <Script src={KAKAO_SDK_URL} strategy="beforeInteractive" />
      <StTabContainer>
        <StTab onClick={onClickTabs}>화장실</StTab>
        <StTab onClick={onClickTabs}>편의점</StTab>
      </StTabContainer>

      <p>📌 현재 나의 위치: </p>
      <StListContainer>
        {selectedTab === "화장실" ? (
          <>
            <StListWrapper>
              <StPlaceName>화장실 이름</StPlaceName>
              <StAddress>주소</StAddress>
            </StListWrapper>
          </>
        ) : (
          <>
            <StListWrapper>
              <StPlaceName>편의점 이름</StPlaceName>
              <StAddress>편의점 주소</StAddress>
            </StListWrapper>
          </>
        )}
      </StListContainer>

      <StMapContainer>
        <KakaoMap></KakaoMap>
        {/* {selectedTab === "화장실" ? (
          <>
            <RestroomMap />
          </>
        ) : (
          <>
            <StoreMap />
          </>
        )} */}
      </StMapContainer>
    </>
  );
};

export default LocationList;
