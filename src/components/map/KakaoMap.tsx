"use client"; //서버에서만 사용가능한 코드를 클라이언트에서도 사용가능하게 해줌
import {
  get,
  mapKeyword,
  mapKeywordPut,
  patch,
  post,
  resetMapList
} from "@/app/api/api";
import { getRestrooms, getStores } from "@/redux/modules/locationSlice";
import Script from "next/script";
import React, { useEffect, useState } from "react";
import {
  Circle,
  Map,
  MapMarker,
  MapTypeControl,
  ZoomControl
} from "react-kakao-maps-sdk";
import { useDispatch, useSelector } from "react-redux";

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
interface KakaoMapProps {
  keyword1?: string;
  setKeyword?: React.Dispatch<React.SetStateAction<string>>;
  list: any[];
  setList: React.Dispatch<React.SetStateAction<any[]>>;
}
const KakaoMap: React.FC<KakaoMapProps> = ({
  keyword1,
  setKeyword,
  list,
  setList
}) => {
  const [info, setInfo] = useState<Maker | null>(null);
  const [markers, setMarkers] = useState<Maker[]>([]);
  const [map, setMap] = useState<kakao.maps.Map | null>(null);

  // const [placeKeyword, setPlaceKeyword] = useState<string>("편의점");
  // console.log("데이터", placeKeyword.placeKeyword);
  //유저 경로
  const [userLocation, setUserLocation] = useState({
    center: {
      lat: 33.450701,
      lng: 126.570667
    },
    errMsg: null,
    isLoading: true
  });

  const dispatch = useDispatch();
  const locationData = useSelector((state) => state);
  console.log(locationData);

  useEffect(() => {
    if (!map) return;
    const ps = new window.kakao.maps.services.Places();
    const radius = 300; // 반경 300m
    const keyword = keyword1;
    console.log("키워드", keyword);
    // 사용자의 위치를 얻습니다.
    navigator.geolocation.getCurrentPosition((position) => {
      const lat = position.coords.latitude;
      const lng = position.coords.longitude;
      setUserLocation((prev) => ({
        ...prev,
        center: {
          lat: position.coords.latitude, // 위도
          lng: position.coords.longitude // 경도
        },
        isLoading: false
      }));
      console.log("사용자기준위치", userLocation.center);
      // 사용자의 위치를 기준으로 반경 300m 내의 장소를 검색합니다.

      ps.keywordSearch(
        keyword,
        (data: [{}], status: string) => {
          console.log("데이터 배열", data);
          dispatch(getRestrooms(data));
          dispatch(getStores(data));
          setList(data);
          data.forEach(async (item: { [key: string]: any }) => {
            const existingData = await get("maplist");

            if (
              existingData.some(
                (data: { [key: string]: any }) => data.id === item.id
              )
            ) {
              // 데이터가 이미 있으면 업데이트
              // await patch(item);
            } else {
              // 데이터가 없으면 추가
              await post(item);
            }
          });
          console.log("상태 string", status);
          if (status === window.kakao.maps.services.Status.OK) {
            const bounds = new window.kakao.maps.LatLngBounds();
            // 사용자의 위치에 마커를 추가합니다.
            const userMarker = new window.kakao.maps.Marker({
              position: new window.kakao.maps.LatLng(lat, lng),
              map: map
            });
            bounds.extend(userMarker.getPosition());
            //
            // const circle = new window.kakao.maps.Circle({
            //   center: userMarker.getPosition(), // 원의 중심 좌표
            //   radius: radius, // 원의 반경 (단위: m)
            //   strokeWeight: 2, // 선의 두께
            //   strokeColor: "#75B8FA", // 선의 색상
            //   strokeOpacity: 1, // 선의 불투명도
            //   fillColor: "#CFE7FF", // 채우기 색상
            //   fillOpacity: 0.7 // 채우기 불투명도
            // });
            // console.log("원", circle);

            // circle.setMap(map);
            //원 테스트용 입니다

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
    });
  }, [map, keyword1]);

  return (
    <>
      <Script src={KAKAO_SDK_URL} strategy="beforeInteractive" />

      <Map
        center={{
          lat: 33.450701,
          lng: 126.570667
        }}
        style={{ width: "100%", height: "100%" }}
        level={4}
        onCreate={setMap}
      >
        {" "}
        <Circle
          center={userLocation.center}
          radius={300}
          strokeWeight={5} // 선의 두께입니다
          strokeColor={"#75B8FA"} // 선의 색깔입니다
          strokeOpacity={1} // 선의 불투명도 입니다 1에서 0 사이의 값이며 0에 가까울수록 투명합니다
          strokeStyle={"dash"} // 선의 스타일 입니다
          fillColor={"#CFE7FF"} // 채우기 색깔입니다
          fillOpacity={0.7} // 채우기 불투명도 입니다
        />
        {markers.map((marker) => (
          <MapMarker
            key={`marker-${marker.title}-${marker.position.lat},${marker.position.lng}`}
            position={marker.position}
            onClick={() => setInfo(marker)}
          >
            <div
              style={{
                color: "#000",
                overflow: "hidden",
                textOverflow: "ellipsis",
                whiteSpace: "nowrap"
              }}
            >
              {marker.title}
            </div>
          </MapMarker>
        ))}
        <MapTypeControl position={"TOPRIGHT"} />
        <ZoomControl position={"RIGHT"} />
        <MapMarker position={userLocation.center}>
          <div style={{ padding: "5px", color: "#1e74ff" }}>
            {"여기가 내 위치야!"}
          </div>
        </MapMarker>
      </Map>
    </>
  );
};
export default KakaoMap;
