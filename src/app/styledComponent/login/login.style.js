import tw from "tailwind-styled-components";

// 로그인과 회원가입 전체 각각을 감싸주는 컨테이너
export const SignLoginContainer = tw.div`
  flex
  flex-col
  justify-center
  text-center
  gap-8
`;
// 타이틀 스타일
export const Title = tw.h1`
  text-5xl
  font-bold
`;
// 서브타이틀 스타일
export const SubTitle = tw.h3`
  text-2xl
`;
// section 전체를 감싸는 컨테이너
export const SectionContainer = tw.div`
  px-20
`;
// input 각각을 감싸는 section
export const Section = tw.section`
  flex
  flex-col
  text-left
  gap-4
  border-2
  border-gray-100
  border-solid
  rounded-2xl
  mb-12
  p-6
`;
// label 스타일
export const Label = tw.label`
  font-bold
`;
// input 스타일
export const Input = tw.input`
  rounded-md
  placeholder:text-blue-200
  pl-2
  focus:outline-none
  focus:ring
  focus:border-blue-300
`;
// input 값 유효성검사 통과 유무를 보여주는 text
export const InputValueValidation = tw.p`
  text-2xl
  pl-4
`;
// 로그인, 회원가입 할 때 버튼 스타일
export const SignLoginBtn = tw.button`
  bg-[var(--primaryColor)]
  text-white
  font-bold
  w-60
  h-20
  rounded-2xl
  m-auto
`;
// 로그인, 회원가입 토글 버튼 스타일
export const ToggleBtn = tw.button`
  m-auto
  w-40
  underline
`;