import React from "react";
import Link from "next/link";
import Button from "../common/button/Button";

const MemberSection = () => {
  return (
    <div className="flex flex-col items-center">
      <h1>로그인 하시면 나의 쾌변일지를 작성할 수 있습니다.</h1>
      <Link href="/login">
        <Button text="로그인" handler={() => {}}></Button>
      </Link>
    </div>
  );
};

export default MemberSection;
