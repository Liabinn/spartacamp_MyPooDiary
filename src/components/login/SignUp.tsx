'use client';

import React, { useState, ChangeEvent, FormEvent } from 'react';
import * as St from '@/app/styledComponents/login/StLogin';
import Spacer from '@/components/ui/Spacer';
import { supabase } from '@/app/api/supa-auth/lib/supabase/supabase';
import { useFormFields, MessageProps, useMessage } from '@/app/api/supa-auth/lib/utils'

// 회원가입 input 값 type
type SignUpInputType = {
  email: string;
  password: string;
  passwordCheck: string;
  firstname: string;
  lastname: string;
  check: boolean;
};

type SupabaseSignupPayload = SignUpInputType;

// input 초기값 설정
const FORM_VALUES: SignUpInputType = {
  email: "",
  password: "",
  passwordCheck: "",
  firstname: "",
  lastname: "",
  check: true,
}

// Message type 및 payload 초기값 설정
const MESSAGE_VALUES: MessageProps = {
  type: "default",
  payload: "",
}

const SignUp = (props: SignUpInputType) => {

  // loading state
  const [loading, setLoading] = useState(false);

  /* useFormFields를 이용한 value(useFormFields 훅에서 return된 객체),
    handleChange(onChange함수), resetFormFields(폼 안의 값 초기화 시켜주는 함수) state */
  const [values, handleChange, resetFormFields] =
  useFormFields<SignUpInputType>(FORM_VALUES);

  // message state
  const [message, handleMessage] = useMessage<MessageProps>(MESSAGE_VALUES);

  // 회원가입 시 서버에 값 넘겨주기
  const signUp = async (payload: SupabaseSignupPayload) => {
    try {
      // 로딩이 진행 중(로딩상태 관리)
      setLoading(true);
      // signUp 함수는 payload를 받아 supabase.auth.signUp에 전달
      const { error } = await supabase.auth.signUp(payload);
      // return 되는 error를 이용하여 handleMessage 훅으로 전달
      if (error) {
        console.log(error);
        handleMessage({ payload: error.message, type: "error" });
      } else {
        handleMessage({
          type: "success",
          payload:
            "회원가입 성공! 등록된 이메일을 확인하여 가입을 완료해주세요 :)",
        });
      }
    } catch (error: any) {
      console.log(error);
      handleMessage({
        type: "error",
        payload: error.error_description || error,
      });
    } finally {
      // 로딩이 끝난 것을 의미함
      setLoading(false);
    }
  };

  // 회원가입 버튼 클릭 시 submit 막아주는 함수
  const handleSumbit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    signUp(values);
    resetFormFields();
  };

  // 체크박스 event
  const [checkBox, setCheckBox] = useState({check: true})
  const handleOnChangeCheckBox = (e: ChangeEvent<HTMLInputElement>) => {
    const {checked} = e.target;
    setCheckBox({check: checked});
    console.log(checkBox);
  };

  return (
    <St.SignLoginContainer>
        <Spacer y={20} />
        <St.Title>회원가입</St.Title>
        <St.SubTitle>회원가입을 하시면 화장실 리뷰와 나만의 일지를 작성할 수 있습니다!</St.SubTitle>
        <Spacer y={20} />
        <hr />
        <Spacer y={20} />
        <St.SectionFormContainer onSubmit={handleSumbit}>
          <St.Section>
            <St.Label htmlFor='email'>ID</St.Label>
            <St.Input id='email' type='email' onChange={handleChange} minLength={4} name='email' required value={values.email} placeholder='아이디는 4글자 이상 입니다.' />
            <St.InputValueValidation>형식에 맞도록 아이디를 설정해주세요.</St.InputValueValidation>
          </St.Section>
          <St.Section>
            <St.Label htmlFor='pw'>PASSWORD</St.Label>
            <St.Input id='pw' type='password' onChange={handleChange} minLength={8} maxLength={20} name='password' required value={values.password} placeholder='비밀번호는 8~20글자입니다.' />
            <St.InputValueValidation>형식에 맞도록 비밀번호를 설정해주세요.</St.InputValueValidation>
          </St.Section>
          <St.Section>
            <St.Label htmlFor='pwc'>PASSWORD CHECK</St.Label>
            <St.Input id='pwc' type='password' onChange={handleChange} minLength={8} maxLength={20} name='passwordCheck' required value={values.passwordCheck} placeholder='비밀번호를 한 번 더 적어주세요.' />
            <St.InputValueValidation>비밀번호가 일치하지 않습니다.</St.InputValueValidation>
          </St.Section>
          <St.Section>
            <St.Label htmlFor='firstname'>First Name</St.Label>
            <St.Input id='firstname' type='text' onChange={handleChange} minLength={1} name='firstname' required value={values.firstname} placeholder='이름을 기입해주세요.' />
            <St.InputValueValidation>이름을 기입해주세요.</St.InputValueValidation>
          </St.Section>
          <St.Section>
            <St.Label htmlFor='lastname'>Last Name</St.Label>
            <St.Input id='lastname' type='text' onChange={handleChange} minLength={1} name='lastname' required value={values.lastname} placeholder='성을 기입해주세요.' />
            <St.InputValueValidation>성을 기입해주세요.</St.InputValueValidation>
          </St.Section>
          <St.Section>
            <div className='flex flex-row gap-4'>
              <St.Label>개인정보 제공 동의</St.Label>
              <input type='checkbox' onChange={handleOnChangeCheckBox} name='check' />
            </div>
            <St.InputValueValidation>개인정보 제공에 동의하셔야 서비스를 이용하실 수 있습니다.</St.InputValueValidation>
          </St.Section>
        <St.SignLoginBtn type='submit'>회원가입</St.SignLoginBtn>
        </St.SectionFormContainer>
        {loading && (
          <div>로딩중입니다...</div>
        )}
      </St.SignLoginContainer>
  )
}

export default SignUp