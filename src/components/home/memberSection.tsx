import React from "react";
import Link from "next/link";
import Image from "next/image";

const MemberSection = () => {
  return (
    <div>
      <Image
        src="/images/image.jpg"
        width={300}
        height={300}
        alt="이미지"
      ></Image>
      <h1>로그인 하시면 나의 쾌변일지를 작성할 수 있습니다.</h1>
      <Link href="/login"></Link>
    </div>
  );
};

export default MemberSection;
