"use client";

import {
  StListWrapper,
  StPlaceName,
  StAddress,
  StGender,
  StTab,
  StTabContainer,
  StListContainer,
  StMapContainer
} from "@/app/styledComponents/home/StLocationList";
import React, { useState } from "react";
import Script from "next/script";
import KakaoMap from "../map/KakaoMap";
import { useSelector } from "react-redux";
import KakaoMapTest from "../map/KakaoMapTest";

const LocationList = () => {
  const [selectedTab, setSelectedTab] = useState<string>("화장실");
  const onClickTabs = (e: React.MouseEvent<HTMLInputElement>) => {
    setSelectedTab(e.currentTarget.innerText);
  };

  const KAKAO_SDK_URL = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_KAKAO_APP_JS_KEY}&libraries=services,clusterer&autoload=false`;

  // 아래 test는 리덕스 툴킷 테스트에요. 삭제하셔도 됩니다!
  const locationData = useSelector((state) => state);
  console.log(locationData);

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
        {/* 프롭스로사용해서 프롭스만 재지정 */}
        <KakaoMap keyword1={selectedTab} setKeyword={setSelectedTab}></KakaoMap>
        {/* {selectedTab === "화장실" ? (
          <>
            <RestroomMap />
          </>
        ) : (
          <>
            <StoreMap />
          </>
        )} */}
    </>
  );
};

export default LocationList;
