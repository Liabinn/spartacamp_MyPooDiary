'use client'
import React, { useState, ChangeEvent, FormEvent, useRef } from 'react'
import axios from 'axios'
import * as St from '@/app/styledComponents/login/StLogin'
import Spacer from '@/components/ui/Spacer'
import { useRouter } from 'next/navigation'

type userData = {
  email: string
  password: string
  passwordCheck: string
  name: string
  check: boolean
}

const SignUp = () => {

  const router = useRouter();

  // 회원가입 시 input 영역 value 가져오기
  const [signUpInputValue, setSignUpInputValue] = useState<userData>({
    email: "",
    password: "",
    passwordCheck: "",
    name: "",
    check: false,
  });
  // 유효성 검사 state
  const [validData, setValidData] = useState({
    email: false,
    password: false,
    passwordCheck: false,
    name: false,
    check: false,
  })
  // password state
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const passwordCheckRef = useRef<HTMLInputElement>(null);
  const nameRef = useRef<HTMLInputElement>(null);

  // 체크박스 외 input onChange event
  const onChangeSignUpInput = (e: ChangeEvent<HTMLInputElement>) => {
    const {name, value} = e.target;
    setSignUpInputValue({...signUpInputValue, [name]: value,});
    console.log(signUpInputValue);
  };

  // 체크박스 event
  const handleOnChangeCheckBox = (e: ChangeEvent<HTMLInputElement>) => {
    const {checked} = e.target;
    setSignUpInputValue({...signUpInputValue, check: checked});
    console.log(signUpInputValue);
  };

  // 회원가입 시 db에 값 넣어주기
  const handleDoSignUp = async () => {
    try {
      const response = await axios.post("http://localhost:4001/users", signUpInputValue);
      console.log(response)
      alert("회원가입 성공! 로그인 페이지로 이동합니다.")
      router.push("/login");
    } catch (error) {
      console.log(error)
      alert("알 수 없는 문제가 발생하였습니다. 잠시 후 다시 시도해주십시오.")
    }
  };

  // 회원가입 버튼 클릭 시 submit 막아주고 
  const handleSubmitOnClick = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // db에 저장
    handleDoSignUp();
  }

  // 비밀번호 체크
  const passwordValidCheck = () => {
    if (passwordRef !== passwordCheckRef) {
      alert("비밀번호가 일치하지 않습니다.");
      setValidData({ ...validData, passwordCheck: true });
      return;
    }
  }

  return (
    <St.SignLoginContainer>
        <Spacer y={20} />
        <St.Title>회원가입</St.Title>
        <St.SubTitle>회원가입을 하시면 화장실 리뷰와 나만의 일지를 작성할 수 있습니다!</St.SubTitle>
        <Spacer y={20} />
        <hr />
        <Spacer y={20} />
        <St.SectionContainer onSubmit={handleSubmitOnClick}>
          <St.Section>
            <St.Label htmlFor='id'>ID</St.Label>
            <St.Input id='id' type='email' onChange={onChangeSignUpInput} ref={emailRef} minLength={4} name='email' placeholder='아이디는 4글자 이상 입니다.' />
            <St.InputValueValidation>형식에 맞도록 아이디를 설정해주세요.</St.InputValueValidation>
          </St.Section>
          <St.Section>
            <St.Label htmlFor='pw'>PASSWORD</St.Label>
            <St.Input id='pw' type='password' onChange={onChangeSignUpInput} ref={passwordRef} minLength={8} maxLength={20} name='password' placeholder='비밀번호는 8~20글자입니다.' />
            <St.InputValueValidation>형식에 맞도록 비밀번호를 설정해주세요.</St.InputValueValidation>
          </St.Section>
          <St.Section>
            <St.Label htmlFor='pwc'>PASSWORD CHECK</St.Label>
            <St.Input id='pwc' type='password' onChange={onChangeSignUpInput} ref={passwordCheckRef} minLength={8} maxLength={20} name='passwordCheck' placeholder='비밀번호를 한 번 더 적어주세요.' />
            <St.InputValueValidation>비밀번호가 일치하지 않습니다.</St.InputValueValidation>
          </St.Section>
          <St.Section>
            <St.Label htmlFor='name'>닉네임</St.Label>
            <St.Input id='name' type='text' onChange={onChangeSignUpInput} ref={nameRef} minLength={2} maxLength={8} name='name' placeholder='닉네임은 2~8글자 한글만 입력가능합니다.' />
            <St.InputValueValidation>형식에 맞도록 닉네임을 설정해주세요.</St.InputValueValidation>
          </St.Section>
          <St.Section>
            <div className='flex flex-row gap-4'>
              <St.Label>개인정보 제공 동의</St.Label>
              <input type='checkbox' onChange={handleOnChangeCheckBox} name='check' />
            </div>
            <St.InputValueValidation>개인정보 제공에 동의하셔야 서비스를 이용하실 수 있습니다.</St.InputValueValidation>
          </St.Section>
        <St.SignLoginBtn type='submit'>회원가입</St.SignLoginBtn>
        </St.SectionContainer>
      </St.SignLoginContainer>
  )
}

export default SignUp