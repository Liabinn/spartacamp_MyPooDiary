import tw from "tailwind-styled-components";

export const StMemberOnlyContainer = tw.div`
  flex
  flex-col
  justify-center
  items-center
`;

export const StMemberOnlyWrapper = tw.div`
  flex
  flex-col
  justify-center
  items-center
  w-[500px]
  h-[500px]
  rounded-full
  mt-36
  bg-[var(--secondaryColor)]
  gap-8
  p-3
`;

export const StButton = tw.button`
  bg-[var(--primaryColor)]
  text-white
  font-bold
  w-60
  h-20
  rounded-2xl
  m-auto
  mb-8
  hover:bg-[var(--accentColor)]
  hover:text-[var(--primaryColor)]
`;
