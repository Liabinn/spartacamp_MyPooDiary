'use client'
import React, { useState } from 'react'
import * as St from '@/app/styledComponents/login/StLogin'
import Login from '@/components/login/Login'
import SignUp from '@/components/login/SignUp'
import Spacer from '@/components/ui/Spacer'

type LoginInputType = {
  email: string
  password: string
};

type SignUpInputType = {
  email: string;
  password: string;
  passwordCheck: string;
  name: string;
  check: boolean;
};

const LoginPage = () => {

  // 로그인-회원가입 toggle state
  const [loginToggle, setLoginToggle] = useState(true);
  const handleOnClickToggle = () => setLoginToggle(prev => !prev)

  return (
    <div className='width-120'>
      {loginToggle === true ? (
        <St.SignLoginContainer>
          <Login />
          <St.ToggleBtn type='button' onClick={()=>handleOnClickToggle()}>회원가입</St.ToggleBtn>
          <Spacer y={20} />
        </St.SignLoginContainer>
      ) : (
        <St.SignLoginContainer>
          <SignUp />
          <St.ToggleBtn type='button' onClick={()=>handleOnClickToggle()}>로그인</St.ToggleBtn>
          <Spacer y={20} />
        </St.SignLoginContainer>
      )}
    </div>
  )
}

export default LoginPage