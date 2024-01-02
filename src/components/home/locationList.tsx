"use client";

import {
  StListWrapper,
  StPlaceName,
  StAddress,
  StGender,
  StTab,
  StTabContainer,
  StListContainer
} from "@/app/styledComponents/home/StLocationList";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import React, { useState } from "react";
import StoreMap, { ConvenienceStore } from "../map/StoreMap";
import RestroomMap, { Restroom } from "../map/RestroomMap ";
import { StMapContainer } from "@/app/styledComponent/home/StLocationList";
import Script from "next/script";

const LocationList = () => {
  const [selectedTab, setSelectedTab] = useState("화장실");
  const onClickTabs = (e: React.MouseEvent<HTMLInputElement>) => {
    setSelectedTab(e.currentTarget.innerText);
  };

  const queryClient = useQueryClient();

  const currentLocation = queryClient.getQueryData(["currentLocation"]) as any;

  const restrooms: Restroom[] | undefined = queryClient.getQueryData([
    "restroomNearMe"
  ]);

  const convenienceStore: ConvenienceStore[] | undefined =
    queryClient.getQueryData(["convenienceStore"]);

  const KAKAO_SDK_URL = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_KAKAO_APP_JS_KEY}&libraries=services,clusterer&autoload=false`;

  return (
    <>
      <Script src={KAKAO_SDK_URL} strategy="beforeInteractive" />
      <StTabContainer>
        <StTab onClick={onClickTabs}>화장실</StTab>
        <StTab onClick={onClickTabs}>편의점</StTab>
      </StTabContainer>

      <p>📌 현재 나의 위치: {currentLocation?.center.lat} </p>
      <StListContainer>
        {selectedTab === "화장실" ? (
          <>
            {restrooms ? (
              restrooms.map((item: Restroom) => (
                <StListWrapper key={item.id}>
                  <StPlaceName>{item.title}</StPlaceName>
                  <StAddress>{item.address_name}</StAddress>
                  <StGender>남자화장실</StGender>
                </StListWrapper>
              ))
            ) : (
              // Handle the case when restrooms is undefined
              <div>No restroom data available</div>
            )}
          </>
        ) : (
          <>
            {convenienceStore ? (
              convenienceStore.map((item: ConvenienceStore) => (
                <StListWrapper key={item.id}>
                  <StPlaceName>{item.title}</StPlaceName>
                  <StAddress>{item.address_name}</StAddress>
                  <StGender>남자화장실</StGender>
                </StListWrapper>
              ))
            ) : (
              // Handle the case when restrooms is undefined
              <div>No restroom data available</div>
            )}
          </>
        )}
      </StListContainer>

      <StMapContainer>
        {selectedTab === "화장실" ? (
          <>
            <RestroomMap />
          </>
        ) : (
          <>
            <StoreMap />
          </>
        )}
      </StMapContainer>
    </>
  );
};

export default LocationList;
