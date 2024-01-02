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

import React, { useState } from "react";
import KakaoMap from "../map/KakaoMap";
import { useSelector } from "react-redux";

type Location = {
  address_name: string;
  place_name: string;
};

const LocationList = () => {
  const [selectedTab, setSelectedTab] = useState<string>("화장실");
  const [list, setList] = useState<any[]>([{}]);
  const onClickTabs = (e: React.MouseEvent<HTMLInputElement>) => {
    setSelectedTab(e.currentTarget.innerText);
  };

  const { restrooms } = useSelector(
    (state: { location: { restrooms: Location[] } }) => state.location
  );

  const { stores } = useSelector(
    (state: { location: { stores: Location[] } }) => state.location
  );

  return (
    <>
      <StTabContainer>
        <StTab onClick={onClickTabs} tabIndex={1}>
          화장실
        </StTab>
        <StTab onClick={onClickTabs} tabIndex={1}>
          편의점
        </StTab>
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

      <StMapContainer>
        {/* 프롭스 로사용해서 프롭스만 재지정 */}
        <KakaoMap
          keyword1={selectedTab}
          setKeyword={setSelectedTab}
          list={list}
          setList={setList}
        ></KakaoMap>
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
