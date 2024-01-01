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
import { useQueryClient } from "@tanstack/react-query";
import React, { useState } from "react";
import { ConvenienceStore } from "../map/StoreMap";
import { Restroom } from "../map/RestroomMap ";

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

  return (
    <>
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
    </>
  );
};

export default LocationList;
