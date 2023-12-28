'use client'
import React, { useState } from 'react'
import * as St from '../styledComponent/login/login.style'
import Spacer from '@/components/ui/Spacer'

const LoginPage = () => {

  // 로그인-회원가입 toggle state
  const [loginToggle, setLoginToggle] = useState(true);
  const handleOnClickToggle = () => setLoginToggle(prev => !prev)

  return (
    <div className='width-120'>
      {loginToggle === true ? (
      <St.SignLoginContainer>
        <Spacer y={20} />
        <St.Title>로그인</St.Title>
        <St.SubTitle>로그인하여 화장실 리뷰와 나만의 일지를 작성해보세요!</St.SubTitle>
        <Spacer y={20} />
        <hr />
        <Spacer y={20} />
        <St.SectionContainer>
          <St.Section>
            <St.Label htmlFor='login_id'>ID</St.Label>
            <St.Input id='login_id' placeholder='아이디는 4~10글자입니다.' />
          </St.Section>
          <St.Section>
            <St.Label htmlFor='login_pw'>PASSWORD</St.Label>
            <St.Input id='login_pw' placeholder='비밀번호는 8~20글자입니다.' />
          </St.Section>
        </St.SectionContainer>
        <St.SignLoginBtn>로그인</St.SignLoginBtn>
        <St.ToggleBtn onClick={()=>handleOnClickToggle()}>회원가입</St.ToggleBtn>
        <Spacer y={20} />
      </St.SignLoginContainer>
      ) : (
      <St.SignLoginContainer>
        <Spacer y={20} />
        <St.Title>회원가입</St.Title>
        <St.SubTitle>회원가입을 하시면 화장실 리뷰와 나만의 일지를 작성할 수 있습니다!</St.SubTitle>
        <Spacer y={20} />
        <hr />
        <Spacer y={20} />
        <St.SectionContainer>
          <St.Section>
            <St.Label htmlFor='id'>ID</St.Label>
            <St.Input id='id' type='text' placeholder='아이디는 4~10글자입니다.' />
            <St.InputValueValidation>형식에 맞도록 아이디를 설정해주세요.</St.InputValueValidation>
          </St.Section>
          <St.Section>
            <St.Label htmlFor='pw'>PASSWORD</St.Label>
            <St.Input id='pw' type='password' placeholder='비밀번호는 8~20글자입니다.' />
            <St.InputValueValidation>형식에 맞도록 비밀번호를 설정해주세요.</St.InputValueValidation>
          </St.Section>
          <St.Section>
            <St.Label htmlFor='pwc'>PASSWORD CHECK</St.Label>
            <St.Input id='pwc' type='password' placeholder='비밀번호를 한 번 더 적어주세요.' />
            <St.InputValueValidation>기존에 적은 비밀번호와 일치하지 않습니다.</St.InputValueValidation>
          </St.Section>
          <St.Section>
            <St.Label htmlFor='nickname'>닉네임</St.Label>
            <St.Input id='nickname' type='text' placeholder='닉네임은 2~8글자 한글만 입력가능합니다.' />
            <St.InputValueValidation>형식에 맞도록 닉네임을 설정해주세요.</St.InputValueValidation>
          </St.Section>
          <St.Section>
            <div className='flex flex-row gap-4'>
              <St.Label>개인정보 제공 동의</St.Label>
              <input type='checkbox' />
            </div>
            <St.InputValueValidation>개인정보 제공에 동의하셔야 서비스를 이용하실 수 있습니다.</St.InputValueValidation>
          </St.Section>
        </St.SectionContainer>
        <St.SignLoginBtn>회원가입</St.SignLoginBtn>
        <St.ToggleBtn onClick={()=>handleOnClickToggle()}>로그인</St.ToggleBtn>
        <Spacer y={20} />
      </St.SignLoginContainer>
      )}
    </div>
  )
}

export default LoginPage