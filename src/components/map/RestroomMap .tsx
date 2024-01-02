"use client";

import { useMutation, useQuery } from "@tanstack/react-query";
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
  position: {
    lat: number;
    lng: number;
  };
  title: string;
  address_name: string;
}

export interface Location {
  center: {
    lat: number;
    lng: number;
  };
  errMsg: null;
  isLoading: boolean;
}

export interface Restroom {
  position: {
    lat: number;
    lng: number;
  };
  title: string;
  address_name: string;
  id: number;
}

const RestroomMap = () => {
  const [info, setInfo] = useState<Maker | null>(null);
  const [markers, setMarkers] = useState<Maker[]>([]);
  const [map, setMap] = useState<kakao.maps.Map | null>(null);
  const [userLocation, setUserLocation] = useState<{
    lat: number;
    lng: number;
  } | null>(null);

  // 현재 유저 위치 가져오기

  const getCurrentLocation = (): Promise<Location> => {
    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const lat = position.coords.latitude;
          const lng = position.coords.longitude;
          setUserLocation({
            lat,
            lng
          });
          resolve({ center: { lat, lng }, errMsg: null, isLoading: true });
        },
        (error) => {
          reject(error);
        }
      );
    });
  };

  // 현재 유저 근처에 있는 화장실
  const getRestroom = (): Promise<Restroom[]> => {
    const places = new window.kakao.maps.services.Places();
    const radius = 300; // 반경 100m
    const keyword = "화장실";

    return new Promise((resolve, reject) => {
      const bounds = new window.kakao.maps.LatLngBounds();

      const searchRestroom = (data: [{}], status: string) => {
        if (status === window.kakao.maps.services.Status.OK) {
          const userMarker = new window.kakao.maps.Marker({
            position: new window.kakao.maps.LatLng(
              currentLocation?.center.lat,
              currentLocation?.center.lng
            ),
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
              title: String(place.place_name),
              address_name: String(place.address_name),
              id: place.id
            };
          });

          setMarkers(newMarkers);
          map?.setBounds(bounds);
          resolve(newMarkers);
        } else {
          reject("Error occurred while searching for restrooms:");
        }
      };

      places.keywordSearch(keyword, searchRestroom, {
        location: new window.kakao.maps.LatLng(
          currentLocation?.center.lat,
          currentLocation?.center.lng
        ),
        radius: radius
      });
    });
  };

  useEffect(() => {
    getCurrentLocation();
    // getRestroom();
  }, [map]);

  // 유저 현재 위치 전역 관리
  const { data: currentLocation } = useQuery({
    queryKey: ["currentLocation"],
    queryFn: getCurrentLocation,
    staleTime: 30000
  });

  // 현재 유저 근처에 있는 화장실 전역관리
  const { data: restroomNearMe } = useQuery({
    queryKey: ["restroomNearMe"],
    queryFn: getRestroom,
    staleTime: 30000
  });

  return (
    <>
      <Map
        center={{
          lat: currentLocation?.center.lat || 0,
          lng: currentLocation?.center.lng || 0
        }}
        style={{ width: "100%", height: "100%" }}
        level={2}
        onCreate={setMap}
      >
        {/* 현재 위치에서 반경 300m */}
        <Circle
          center={{
            lat: currentLocation?.center.lat || 0,
            lng: currentLocation?.center.lng || 0
          }}
          radius={250}
          strokeWeight={5} // 선의 두께입니다
          strokeColor={"#75B8FA"} // 선의 색깔입니다
          strokeOpacity={1} // 선의 불투명도 입니다 1에서 0 사이의 값이며 0에 가까울수록 투명합니다
          strokeStyle={"dash"} // 선의 스타일 입니다
          fillColor={"#CFE7FF"} // 채우기 색깔입니다
          fillOpacity={0.7} // 채우기 불투명도 입니다
        />

        {/* 현재 위치 마커 */}
        <MapMarker
          position={{
            lat: currentLocation?.center.lat || 0,
            lng: currentLocation?.center.lng || 0
          }}
        >
          <div style={{ padding: "5px", color: "#000" }}>{"여기"}</div>
        </MapMarker>

        {markers.map((marker) => (
          <MapMarker
            key={`marker-${marker.title}-${marker.position.lat},${marker.position.lng}`}
            position={marker.position}
            onClick={() => setInfo(marker)}
          >
            {info && info.title === marker.title && (
              <div style={{ color: "#000" }}>
                {marker.title}
                <button>리뷰쓰기</button>
              </div>
            )}
          </MapMarker>
        ))}

        <MapTypeControl position={"TOPRIGHT"} />
        <ZoomControl position={"RIGHT"} />
      </Map>
    </>
  );
};
export default RestroomMap;
