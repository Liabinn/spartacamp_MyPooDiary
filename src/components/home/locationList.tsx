import {
  StListWrapper,
  StPlaceName,
  StAddress,
  StGender,
  StTab,
  StTabContainer,
  StListContainer
} from "@/app/styledComponents/home/StLocationList";
import React from "react";

const LocationList = () => {
  return (
    <>
      <StTabContainer>
        <StTab>🚽화장실</StTab>
        <StTab>🧻휴지</StTab>
      </StTabContainer>

      <StListContainer>
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
        <StListWrapper>
          <StPlaceName>진관사입구 개방화장실</StPlaceName>
          <StAddress>주소</StAddress>
          <StGender>남자화장실</StGender>
        </StListWrapper>
      </StListContainer>
    </>
  );
};

export default LocationList;
