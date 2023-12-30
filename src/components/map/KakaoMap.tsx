"use client"; //서버에서만 사용가능한 코드를 클라이언트에서도 사용가능하게 해줌
import Script from "next/script";
import React, { useEffect, useState } from "react";

import {
  Circle,
  Map,
  MapMarker,
  MapTypeControl,
  ZoomControl
} from "react-kakao-maps-sdk";

declare global {
  interface Window {
    kakao: any;
  }
}

interface Maker {
  position: { lat: number; lng: number };
  title: string;
}
const KakaoMap = () => {
  const [info, setInfo] = useState<Maker | null>(null);
  const [markers, setMarkers] = useState<Maker[]>([]);
  const [map, setMap] = useState<kakao.maps.Map | null>(null);
  const [level, setLevel] = useState<number>();

  const [userLocation, setUserLocation] = useState({
    center: {
      lat: 33.450701,
      lng: 126.570667
    },
    errMsg: null,
    isLoading: true
  });
  // useEffect(() => {
  //   if (!map) return;
  //   const ps = new window.kakao.maps.services.Places();

  //   ps.keywordSearch("은평구 화장실", (data: [{}], status: string) => {
  //     console.log("데이터 배열", data);
  //     console.log("상태 string", status);
  //     if (status === window.kakao.maps.services.Status.OK) {
  //       const bounds = new window.kakao.maps.LatLngBounds();
  //       const newMarkers = data.map((place: any) => {
  //         const position = { lat: Number(place.y), lng: Number(place.x) };
  //         bounds.extend(
  //           new window.kakao.maps.LatLng(position.lat, position.lng)
  //         );
  //         return {
  //           position,
  //           title: String(place.place_name)
  //         };
  //       });

  //       setMarkers(newMarkers);
  //       map.setBounds(bounds);
  //     }
  //   });
  // }, [map]);

  useEffect(() => {
    if (!map) return;
    const ps = new window.kakao.maps.services.Places();

    // 사용자의 위치를 얻습니다.
    navigator.geolocation.getCurrentPosition((position) => {
      const lat = position.coords.latitude; // 위도
      const lng = position.coords.longitude; // 경도
      console.log("lat", lat);
      console.log("lng", lng);
      setUserLocation((perv) => ({
        ...perv,
        center: {
          lat: lat,
          lng: lng
        },
        errMsg: null,
        isLoading: false
      }));
      // 사용자의 위치를 기준으로 반경 200m 내의 장소를 검색합니다.
      const radius = 200; // 반경 200m
      const keyword = " 화장실";
      ps.keywordSearch(
        keyword,
        (data: [{}], status: string) => {
          console.log("데이터 배열", data);
          console.log("상태 string", status);
          if (status === window.kakao.maps.services.Status.OK) {
            const bounds = new window.kakao.maps.LatLngBounds();

            // 사용자의 위치에 마커를 추가합니다.
            const userMarker = new window.kakao.maps.Marker({
              position: new window.kakao.maps.LatLng(lat, lng),
              map: map
            });
            bounds.extend(userMarker.getPosition());

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
        },
        {
          location: new window.kakao.maps.LatLng(lat, lng),
          radius: radius
        }
      );

      // map.setCenter(new window.kakao.maps.LatLng(lat, lng));
      // const circleCenter = new window.kakao.maps.LatLng(lat, lng);
      // const circleRadius = 100; // 반경 100m
      // const circle = new window.kakao.maps.Circle({
      //   center: circleCenter,
      //   radius: circleRadius
      // });
      // circle.setMap(map);
    });
  }, [map, level]);
  // useEffect(() => {
  //   console.log("원 센터확인", userLocation.center);
  // }, [userLocation]);
  // useEffect(() => {
  //   const updateCenter = () => {
  //     if (map) {
  //       const { lat, lng } = userLocation.center;
  //       const center = new window.kakao.maps.LatLng(lat, lng);
  //       console.log("updateCenter", center);
  //       map.setCenter(center);
  //     }
  //   };

  //   updateCenter();
  // }, [map, userLocation.center]);
  return (
    <>
      {/* 카카오맵 */}
      <Map
        center={{
          lat: 33.450701,
          lng: 126.570667
        }}
        style={{ width: "100%", height: "100%" }}
        level={2}
        onCreate={(map) => {
          setMap(map);
          // const center = map.getCenter();
          // console.log("맵에서 센터확인:", center);
        }}
      >
        {" "}
        <Circle
          center={userLocation.center}
          radius={250}
          strokeWeight={5} // 선의 두께입니다
          strokeColor={"#75B8FA"} // 선의 색깔입니다
          strokeOpacity={1} // 선의 불투명도 입니다 1에서 0 사이의 값이며 0에 가까울수록 투명합니다
          strokeStyle={"dash"} // 선의 스타일 입니다
          fillColor={"#CFE7FF"} // 채우기 색깔입니다
          fillOpacity={0.7} // 채우기 불투명도 입니다
        />
        <MapMarker position={userLocation.center}>
          <div style={{ padding: "5px", color: "#000" }}>
            {"여기가 내 위치야!"}
          </div>
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
