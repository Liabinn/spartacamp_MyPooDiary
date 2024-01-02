import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  StButton,
  StMemberOnlyContainer,
  StMemberOnlyWrapper
} from "@/app/styledComponents/home/StMemberOnlySection";

const MemberSection = () => {
  return (
    <StMemberOnlyContainer>
      <StMemberOnlyWrapper>
        <Image
          src="/images/image.png"
          width={300}
          height={300}
          alt="이미지"
          priority={false}
        ></Image>
        <h1>로그인 하시면 나의 쾌변일지를 작성할 수 있습니다.</h1>
        <Link href="/login">
          <StButton>로그인</StButton>
        </Link>
      </StMemberOnlyWrapper>
    </StMemberOnlyContainer>
  );
};

export default MemberSection;
