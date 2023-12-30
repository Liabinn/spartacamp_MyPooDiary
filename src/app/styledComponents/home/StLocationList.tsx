import tw from "tailwind-styled-components";

// 화장실과 휴지를 선택할 수 있는 탭
export const StTabContainer = tw.div`
  flex
  gap-12
  justify-center
  my-14
`;

export const StTab = tw.div`
  text-4xl 
  font-bold
  cursor-pointer
  shadow
  p-5
  rounded-md
  bg-accentColor
`;

// 모든 리스트를 감싸는 컨테이너
export const StListContainer = tw.div`
  flex
`;

// 화장실 정보를 담은 카드 Wrapper
export const StListWrapper = tw.ul`
  w-full 
  gap-5 
  shadow-lg 
  m-9
  p-9
`;

// 화장실 이름
export const StPlaceName = tw.p`
  text-base

`;

export const StAddress = tw.p`
  text-sm
`;

export const StGender = tw.p`
  text-sm
`;
