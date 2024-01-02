import tw from "tailwind-styled-components";
export const Avatar = tw.img`
  my-8
  w-36
  rounded-full
`;
export const Container = tw.div`
  flex
  flex-col
  justify-center
  items-center
`;
export const Nickname = tw.h2`
  mb-2
`;
export const Id = tw.p`
  text-gray-400
  text-xl
  mb-8
`;

export const RadioSelect = tw.label`
    m-auto
    text-[1.8rem]

`;
export const DiaryContainer = tw.div`
  flex
  flex-col
  items-center
  bg-[var(--secondaryColor)]
  p-8
  w-[90%]
  max-w-[70rem]
 
`;
export const QuestionContainer = tw.div`
  flex
  flex-col
  mt-4
  gap-8
  mb-10
  w-[95%]
  .sm:w-[95%]
`;
export const Title = tw.h1`
mt-4
text-5xl
mb-8
`;
export const Date = tw.div`
ml-auto
mr-8
text-2xl
`;
export const TextInput = tw.input`
border-2 
h-20
p-2
rounded-2xl
text-2xl
`;
export const closeBtn = tw.p`
ml-auto
cursor-pointer
`;
export const InputWrap = tw.div`
bg-white
h-20
flex
items-center
rounded-2xl
min-w-[20rem]
pl-[0.5rem]
`;
export const EditTextArea = tw.textarea`
bg-white
min-h-20
h-fit
flex
items-center
rounded-2xl
min-w-[20rem]
p-2
`;
export const PooImage = tw.img`
// w-[50%]
`;

export const ButtonContainer = tw.div`
flex
gap-6
`;
export const TileContents = tw.div`
flex
items-center
justify-center
`;
export const tileContainer = tw.div`
w-[3rem]
`;
export const TileP = tw.p`
text-[2rem]
text-black
`;
