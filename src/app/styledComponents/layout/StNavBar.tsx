import tw from "tailwind-styled-components";

// 네비게이션바를 감싸는 컨테이너
export const StNavContainer = tw.nav`
  flex
  justify-between
  items-center
  my-9
  bg-[var(--primaryColor)]
  py-6
  px-12
  rounded-full
  text-white
  shadow-md
`;

// 네비게이션 메뉴를 감싸는 wrapper
export const StNavWrapper = tw.div`
  flex
  gap-8
`;
