"use client";
import styled from "styled-components";

const ProfilePage = () => {
  return (
    <Container>
      <Avatar src="../../../assets/defaultAvatar.JPG" />
      <h2>화장실 급해요</h2>
      <p>ddongssaja</p>
    </Container>
  );
};
const Avatar = styled.img`
  margin: 2.5rem;
  width: 10rem;
  border-radius: 50%;
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  & h2 {
    font-size: 2rem;
    margin-bottom: 1rem;
  }
  & p {
    color: gray;
  }
`;

export default ProfilePage;
