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
import React, { useState } from "react";

const LocationList = () => {
  const [selectedTab, setSelectedTab] = useState("화장실");

  const onClickTabs = (e: React.MouseEvent<HTMLInputElement>) => {
    setSelectedTab(e.currentTarget.innerText);
  };

  return (
    <>
      <StTabContainer>
        <StTab onClick={onClickTabs}>화장실</StTab>
        <StTab onClick={onClickTabs}>편의점</StTab>
      </StTabContainer>

      <StListContainer>
        {selectedTab === "화장실" ? (
          <>
            <StListWrapper>
              <StPlaceName>진관사입구 개방화장실</StPlaceName>
              <StAddress>주소</StAddress>
              <StGender>남자화장실</StGender>
            </StListWrapper>
            <StListWrapper>
              <StPlaceName>진관사입구 개방화장실</StPlaceName>
              <StAddress>주소</StAddress>
              <StGender>남자화장실</StGender>
            </StListWrapper>
            <StListWrapper>
              <StPlaceName>진관사입구 개방화장실</StPlaceName>
              <StAddress>주소</StAddress>
              <StGender>남자화장실</StGender>
            </StListWrapper>
          </>
        ) : (
          <>
            <StListWrapper>
              <StPlaceName>편의점</StPlaceName>
              <StAddress>주소</StAddress>
              <StGender>남자화장실</StGender>
            </StListWrapper>
            <StListWrapper>
              <StPlaceName>편의점</StPlaceName>
              <StAddress>주소</StAddress>
              <StGender>남자화장실</StGender>
            </StListWrapper>
            <StListWrapper>
              <StPlaceName>편의점</StPlaceName>
              <StAddress>주소</StAddress>
              <StGender>남자화장실</StGender>
            </StListWrapper>
          </>
        )}
      </StListContainer>
    </>
  );
};

export default LocationList;
