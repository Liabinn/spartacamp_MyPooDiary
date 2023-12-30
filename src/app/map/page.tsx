import KakaoMap from "@/components/map/KakaoMap";
import React from "react";

const MapPage = () => {
  return (
    <div>
      <main className="flex justify-center items-center w-screen h-screen">
        <KakaoMap />
      </main>
    </div>
  );
};

export default MapPage;
