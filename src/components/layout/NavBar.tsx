import {
  StNavContainer,
  StNavWrapper
} from "@/app/styledComponents/layout/StNavBar";
import Link from "next/link";

const NavBar = () => {

  let status = "not authenticated";

  return (
    <StNavContainer>
      <p>나의쾌변일지</p>
      <StNavWrapper>
        <Link href="/">HOME</Link>
        <Link href="/map">MAP</Link>
        {status === "authenticated" ? (
          <>
            <Link href="/profile">PROFILE</Link>
            <div onClick={(e) => {
              e.preventDefault();
              alert("로그아웃 되었습니다.")
            }}>LOGOUT</div>
          </>
        ) : (
          <Link href="/login">LOGIN</Link>
        )}
      </StNavWrapper>
    </StNavContainer>
  );
};

export default NavBar;
