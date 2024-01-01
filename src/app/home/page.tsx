import HomeMap from "@/components/home/homeMap";
import LocationList from "@/components/home/locationList";
import MemberSection from "@/components/home/memberSection";
import React from "react";

const HomePage = () => {
  return (
    <div>
      <LocationList />
      <HomeMap></HomeMap>
      <MemberSection></MemberSection>
    </div>
  );
};

export default HomePage;
