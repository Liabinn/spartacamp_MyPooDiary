import React from "react";
import {
  StFooterContainer,
  StFooterMenu,
  StFooterTitle,
  StFooterWrapper
} from "@/app/styledComponents/layout/StFooter";

const Footer = () => {
  return (
    <StFooterContainer>
      <StFooterTitle>📘 나의 쾌변 일지</StFooterTitle>
      <StFooterWrapper>
        <StFooterMenu>Contact Us</StFooterMenu>
        <StFooterMenu>Privacy Policy</StFooterMenu>
        <StFooterMenu>Terms of Service</StFooterMenu>
      </StFooterWrapper>
    </StFooterContainer>
  );
};

export default Footer;
