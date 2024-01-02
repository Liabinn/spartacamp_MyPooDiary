'use client'
import React, { useState, ChangeEvent, FormEvent } from 'react'
import axios from 'axios'
import * as St from '@/app/styledComponents/login/StLogin'
import Spacer from '@/components/ui/Spacer'
import { useRouter } from 'next/navigation'


type userData = {
  email: string
  password: string
}

const Login = () => {

  const router = useRouter();

  // 로그인 시 input 영역 value 가져오기
  const [loginInputValue, setLoginInputValue] = useState<userData>({
    email: "",
    password: "",
  });
  const onChangeLoginInput = (e: ChangeEvent<HTMLInputElement>) => {
    const {name, value} = e.target
    setLoginInputValue({
      ...loginInputValue,
      [name]: value,
    })
    console.log(loginInputValue)
  }

  // 로그인
  const handleDoLogin = async () => {
    try {
      // email과 password를 가져와서 로그인 시도
      const {data} = await axios.post("http://localhost:4001/login", loginInputValue)

      // const express = require('express');
      // const router = express.Router();
      // const auth = require('../')

      // 로그인이 완료되면, 토큰을 로컬호스트에 저장(토큰이 없다면 오류)

  // const JWT_SECRET_KEY = require('./node_modules/json-server-auth/dist/constants').JWT_SECRET_KEY;
  // const auth = require('json-server-auth')
  // const server = express()
  // const router = jsonServer.router('db.json')

  // server.get('/profile', auth, (req, res, next) => {
  //   const token = req.header('Authorization') ? req.header('Authorization').replace('Bearer ', '') : null;
  //   if (token) {
  //     try {
  //       const data = jwt.verify(token, JWT_SECRET_KEY)

  //       const { db } = req.app;
  //       let user = db.get('users').find({ email: data.email }).value();
  //       res.json([user])
  //     }
  //     catch (error) {
  //       res.json({ error: error })
  //     }

  //   } else {
  //     res.json({ error: { name: "User not authorized" } })
  //   }
  // });

  // server.db = router.db
  // server.use(auth);

      // 로그인 성공 메시지
      alert("로그인 성공!");

      // 메인페이지 이동
      router.push("/");

    } catch (error) {
      console.log(error)
      alert("알 수 없는 문제가 발생하였습니다. 잠시 후 다시 시도해 주십시오.")
    }
  }

  // 로그인 버튼 클릭 시 submit 막아주고 
  const handleSubmitOnClick =(e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // db에 저장
    handleDoLogin();
  }

  return (
    <St.SignLoginContainer>
        <Spacer y={20} />
        <St.Title>로그인</St.Title>
        <St.SubTitle>로그인하여 화장실 리뷰와 나만의 일지를 작성해보세요!</St.SubTitle>
        <Spacer y={20} />
        <hr />
        <Spacer y={20} />
        <St.SectionFormContainer onSubmit={handleSubmitOnClick}>
          <St.Section>
            <St.Label htmlFor='login_id'>ID</St.Label>
            <St.Input id='login_id' type='email' name='email' onChange={onChangeLoginInput} minLength={4} placeholder='아이디는 4글자 이상 입니다.' />
          </St.Section>
          <St.Section>
            <St.Label htmlFor='login_pw'>PASSWORD</St.Label>
            <St.Input id='login_pw' type='password' name='password' onChange={onChangeLoginInput} minLength={8} maxLength={20} placeholder='비밀번호는 8~20글자입니다.' />
          </St.Section>
        <St.SignLoginBtn type='submit'>로그인</St.SignLoginBtn>
        </St.SectionFormContainer>
      </St.SignLoginContainer>
  )
}

export default Login