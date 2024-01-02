"use client";
import { get } from "@/app/api/api";
import { useQuery } from "@tanstack/react-query";
import React from "react";
import * as St from "../../app/styledComponents/map/StMap";
import { usePlaceKeywordMutation } from "@/app/hook/hook";
interface MapListProps {
  keyword: string;
  setKeyword: React.Dispatch<React.SetStateAction<string>>;
  list: any[];
  setList: React.Dispatch<React.SetStateAction<any[]>>;
}
const MapLIst: React.FC<MapListProps> = ({
  keyword,
  setKeyword,
  list,
  setList
}) => {
  const placeKeywordMutation = usePlaceKeywordMutation();
  const { data, isLoading, error } = useQuery({
    queryKey: ["maplist"],
    queryFn: () => get("maplist")
  });

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>{error.message}</p>;
  // console.log("페이지", data);
  return (
    <St.maplistConstainer>
      <St.maplistTop>맵리스트</St.maplistTop>
      <St.maplistContentBtnBox>
        <St.maplistContentBoxBtn onClick={() => setKeyword("편의점")}>
          편의점
        </St.maplistContentBoxBtn>
        <St.maplistContentBoxBtn onClick={() => setKeyword("화장실")}>
          화장실
        </St.maplistContentBoxBtn>
      </St.maplistContentBtnBox>
      {list
        ?.filter((item: any) => {
          if (keyword === "화장실") {
            return item.category_name === "가정,생활 > 화장실";
          } else if (keyword === "편의점") {
            return item.category_group_name === "편의점";
          } else {
            return true; // 기본적으로 모든 항목을 포함합니다.
          }
        })
        .map((item: any) => {
          return (
            <St.maplistContentBox key={item}>
              <St.maplistContentBoxTitle>
                {item.place_name}
              </St.maplistContentBoxTitle>
              <St.maplistContentBoxAddress>
                <p style={{ fontSize: "small" }}>{item.address_name}</p>
              </St.maplistContentBoxAddress>
              <St.maplistContentBoxplaceUrl
                onClick={() => window.open(item.place_url, "_blank")}
              >
                <a style={{ fontSize: "small", color: "grey" }} href="">
                  {" "}
                  상세보기
                </a>
              </St.maplistContentBoxplaceUrl>
            </St.maplistContentBox>
          );
        })}
    </St.maplistConstainer>
  );
};

export default MapLIst;
