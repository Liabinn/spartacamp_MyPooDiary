"use client"; //서버에서만 사용가능한 코드를 클라이언트에서도 사용가능하게 해줌
import Script from "next/script";
import React, { useEffect, useState } from "react";

import {
  Map,
  MapMarker,
  MapTypeControl,
  ZoomControl
} from "react-kakao-maps-sdk";
import * as St from "../../styled-component/map/Stmap";

declare global {
  interface Window {
    kakao: any;
  }
}
//카카오맵 API키 .env.local에 저장한거에서 가져옴
const KAKAO_SDK_URL = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_KAKAO_APP_JS_KEY}&autoload=false&libraries=services`;
interface Maker {
  position: { lat: number; lng: number };
  title: string;
}
const KakaoMap = () => {
  const [info, setInfo] = useState<Maker | null>(null);
  const [markers, setMarkers] = useState<Maker[]>([]);
  const [map, setMap] = useState<kakao.maps.Map | null>(null);
  useEffect(() => {
    if (!map) return;
    const ps = new window.kakao.maps.services.Places();

    ps.keywordSearch("은평구 화장실", (data: [{}], status: string) => {
      console.log("데이터 배열", data);
      console.log("상태 string", status);
      if (status === window.kakao.maps.services.Status.OK) {
        const bounds = new window.kakao.maps.LatLngBounds();
        const newMarkers = data.map((place: any) => {
          const position = { lat: Number(place.y), lng: Number(place.x) };
          bounds.extend(
            new window.kakao.maps.LatLng(position.lat, position.lng)
          );
          return {
            position,
            title: String(place.place_name)
          };
        });

        setMarkers(newMarkers);
        map.setBounds(bounds);
      }
    });
  }, [map]);
  return (
    <>
      <Script src={KAKAO_SDK_URL} strategy="beforeInteractive" />
      <Map
        center={{ lat: 33.450701, lng: 126.570667 }}
        style={{ width: "80%", height: "80%" }}
        level={3}
        onCreate={setMap}
      >
        <MapMarker position={{ lat: 33.55635, lng: 126.795841 }}>
          <div style={{ color: "#000" }}>된다?</div>
        </MapMarker>
        {markers.map((marker) => (
          <MapMarker
            key={`marker-${marker.title}-${marker.position.lat},${marker.position.lng}`}
            position={marker.position}
            onClick={() => setInfo(marker)}
          >
            {info && info.title === marker.title && (
              <div style={{ color: "#000" }}>{marker.title}</div>
            )}
          </MapMarker>
        ))}
        <MapTypeControl position={"TOPRIGHT"} />
        <ZoomControl position={"RIGHT"} />
      </Map>
    </>
  );
};

export default KakaoMap;
