"use client";

import {
  StAddress,
  StListContainer,
  StListWrapper,
  StMapContainer,
  StPlaceName,
  StAddress,
  StTab,
  StTabContainer
} from "@/app/styledComponents/home/StLocationList";
import Script from "next/script";
import React, { useState } from "react";
import KakaoMap from "../map/KakaoMap";

import { useSelector } from "react-redux";
import { store } from "@/redux/configStore/store";

type Location = {
  address_name: string;
  place_name: string;
};

const LocationList = () => {
  const [selectedTab, setSelectedTab] = useState<string>("화장실");
  const onClickTabs = (e: React.MouseEvent<HTMLInputElement>) => {
    setSelectedTab(e.currentTarget.innerText);
  };

  const { restrooms } = useSelector(
    (state: { location: { restrooms: Location[] } }) => state.location
  );


  const { stores } = useSelector(
    (state: { location: { stores: Location[] } }) => state.location
  );

  console.log(stores);

  const KAKAO_SDK_URL = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_KAKAO_APP_JS_KEY}&libraries=services,clusterer&autoload=false`;


  return (
    <>
      <Script src={KAKAO_SDK_URL} strategy="beforeInteractive" />
      <StTabContainer>
        <StTab onClick={onClickTabs}>화장실</StTab>
        <StTab onClick={onClickTabs}>편의점</StTab>
      </StTabContainer>

      <StListContainer>
        {selectedTab === "화장실" ? (
          <>
            {restrooms.map((restroom: Location) => {
              return (
                <StListWrapper key={restroom.place_name}>
                  <StPlaceName>{restroom.place_name}</StPlaceName>
                  <StAddress>{restroom.address_name}</StAddress>
                </StListWrapper>
              );
            })}
          </>
        ) : (
          <>
            {stores.map((store: Location) => {
              return (
                <StListWrapper key={store.place_name}>
                  <StPlaceName>{store.place_name}</StPlaceName>
                  <StAddress>{store.address_name}</StAddress>
                </StListWrapper>
              );
            })}
          </>
        )}
      </StListContainer>


      {selectedTab === "화장실" ? (
        <KakaoMap keyword1="화장실"></KakaoMap>
      ) : (
        <KakaoMap keyword1="편의점"></KakaoMap>
      )}

      <StMapContainer>
        {/* 프롭스 로사용해서 프롭스만 재지정 */}
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
      </StMapContainer>

    </>
  );
};

export default LocationList;
