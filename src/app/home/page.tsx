"use client";

import Button from "@/components/common/button/Button";
import HomeMap from "@/components/home/homeMap";
import LocationList from "@/components/home/locationList";
import MemberSection from "@/components/home/memberSection";
import Link from "next/link";
import React from "react";

const HomePage = () => {
  return (
    <div>
      <div className="flex justify-around gap-10">
        <div className="flex flex-col gap-10 my-10">
          <h2 className="border-sky-500">현재 나와 가장 가까운 화장실</h2>
          <LocationList></LocationList>
        </div>

        <div className="flex flex-col gap-10 my-10">
          <h2>현재 나와 가장 가까운 편의점</h2>
          <LocationList></LocationList>
        </div>
      </div>

      <HomeMap></HomeMap>

      <MemberSection></MemberSection>
    </div>
  );
};

export default HomePage;
