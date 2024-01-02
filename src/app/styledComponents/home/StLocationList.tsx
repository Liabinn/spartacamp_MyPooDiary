import tw from "tailwind-styled-components";

// 화장실과 휴지를 선택할 수 있는 탭
export const StTabContainer = tw.div`
  flex
  gap-12
  justify-center
  my-14
  
`;

export const StTab = tw.div`
  flex
  justify-center
  items-center
  w-60
  h-20
  rounded-2xl
  bg-[var(--accentColor)]
  hover:bg-[var(--primaryColor)]
  hover:text-[var(--accentColor)]
  focus:bg-[var(--primaryColor)]
  focus:text-[var(--accentColor)]
  cursor-pointer
`;

// 모든 리스트를 감싸는 컨테이너
export const StListContainer = tw.div`
  flex
`;

// 화장실 정보를 담은 카드 Wrapper
export const StListWrapper = tw.ul`
  flex
  flex-col
  w-full 
  gap-5 
  shadow-lg 
  m-9
  p-9
`;

// 화장실 이름
export const StPlaceName = tw.p`
  text-[1.867rem]
`;

export const StAddress = tw.p`
  text-[1.667rem]
`;

export const StGender = tw.p`
  text-[1.667rem]
`;

export const StMapContainer = tw.div`
  flex 
  flex-col 
  justify-center 
  items-center 
  w-full 
  h-screen
`;
