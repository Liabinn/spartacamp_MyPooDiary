import tw from "tailwind-styled-components";

export const StFooterContainer = tw.footer`
  flex
  flex-col
  gap-8
  items-center
  p-12
  bg-[var(--accentColor)]
  my-32
  rounded-2xl
`;

export const StFooterWrapper = tw.div`
  flex
  gap-8
`;

export const StFooterTitle = tw.p`
  text-[1.667rem]
`;

export const StFooterMenu = tw.p`
  text-[1.667rem]
`;
