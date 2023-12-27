"use client";

import tw from "tailwind-styled-components";

const ProfilePage = () => {
  return (
    <Container>
      <Avatar src="../../../assets/defaultAvatar.JPG" />
      <Nickname>화장실 급해요</Nickname>
      <Id>ddongssaja</Id>
    </Container>
  );
};
const Avatar = tw.img`
  my-8
  w-36
  rounded-full
`;
const Container = tw.div`
  flex
  flex-col
  justify-center
  items-center

`;
const Nickname = tw.h2`
  mb-8
`;
const Id = tw.p`
text-gray-400
text-lg
`;

export default ProfilePage;
