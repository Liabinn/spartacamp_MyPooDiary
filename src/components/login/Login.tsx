'use client'
import React, { useState, ChangeEvent, FormEvent } from 'react'
import axios from 'axios'
import * as St from '@/app/styledComponents/login/StLogin'
import Spacer from '@/components/ui/Spacer'
import { supabase } from '@/app/api/supa-auth/lib/supabase'
import { useFormFields, MessageProps, useMessage } from '@/app/api/supa-auth/lib/utils'

type LoginInputType = {
  email: string
  password: string
};

type SupabaseLoginPayload = LoginInputType;

// input 초기값 설정
const FORM_VALUES: LoginInputType = {
  email: "",
  password: "",
}

// Message type 및 payload 초기값 설정
const MESSAGE_VALUES: MessageProps = {
  type: "default",
  payload: "",
}

const Login = (props: LoginInputType) => {

  // loading state
  const [loading, setLoading] = useState(false);

  /* useFormFields를 이용한 value(useFormFields 훅에서 return된 객체),
    handleChange(onChange함수), resetFormFields(폼 안의 값 초기화 시켜주는 함수) state */
  const [values, handleChange, resetFormFields] =
  useFormFields<LoginInputType>(FORM_VALUES);

  // message state
  const [message, handleMessage] = useMessage<MessageProps>(MESSAGE_VALUES);

  // 로그인 시도
  const signIn = async (payload: SupabaseLoginPayload) => {
    try {
      // 로딩이 진행 중(로딩상태 관리)
      setLoading(true);
      // signUp 함수는 payload를 받아 supabase.auth.signUp에 전달
      const { error } = await supabase.auth.signIn(payload);
      // return 되는 error를 이용하여 handleMessage 훅으로 전달
      if (error) {
        console.log(error);
        handleMessage({ payload: error.message, type: "error" });
      } else {
        handleMessage({
          type: "success",
          payload: "로그인 성공! 홈페이지로 이동합니다.",
        });
      }
    } catch (error: any) {
      console.log(error);
      handleMessage({
        payload: error.error_description || error,
        type: "error",
      });
    } finally {
      // 로딩이 끝난 것을 의미함
      setLoading(false);
    }
  };

  // 로그인 버튼 클릭 시 submit 막아주는 함수
  const handleSumbit = (event: React.FormEvent) => {
    event.preventDefault();
    signIn(values);
    resetFormFields();
  };

  return (
    <St.SignLoginContainer>
        <Spacer y={20} />
        <St.Title>로그인</St.Title>
        <St.SubTitle>로그인하여 화장실 리뷰와 나만의 일지를 작성해보세요!</St.SubTitle>
        <Spacer y={20} />
        <hr />
        <Spacer y={20} />
        <St.SectionFormContainer onSubmit={handleSumbit}>
          <St.Section>
            <St.Label htmlFor='login_id'>ID</St.Label>
            <St.Input id='login_id' type='email' name='email' onChange={handleChange} minLength={4} placeholder='아이디는 4글자 이상 입니다.' />
          </St.Section>
          <St.Section>
            <St.Label htmlFor='login_pw'>PASSWORD</St.Label>
            <St.Input id='login_pw' type='password' name='password' onChange={handleChange} minLength={8} maxLength={20} placeholder='비밀번호는 8~20글자입니다.' />
          </St.Section>
        <St.SignLoginBtn type='submit'>로그인</St.SignLoginBtn>
        </St.SectionFormContainer>
      </St.SignLoginContainer>
  )
}

export default Login