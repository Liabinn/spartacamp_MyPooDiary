import React from 'react'

const LoginPage = () => {
  return (
    <div>
      <div>
        <h1>회원가입</h1>
        <h3>회원가입을 하시면 나만의 일지를 작성할 수 있습니다!</h3>
        <hr />
        <div>
          <section>
            <label>ID</label>
            <input placeholder='아이디는 4~10글자입니다.' />
            <p>형식에 맞도록 아이디를 설정해주세요.</p>
          </section>
          <section>
            <label>PASSWORD</label>
            <input placeholder='비밀번호는 8~20글자입니다.' />
            <p>형식에 맞도록 비밀번호를 설정해주세요.</p>
          </section>
          <section>
            <label>PASSWORD CHECK</label>
            <input placeholder='비밀번호를 한 번 더 적어주세요.' />
            <p>기존에 적은 비밀번호와 일치하지 않습니다.</p>
          </section>
          <section>
            <label>닉네임</label>
            <input placeholder='닉네임은 2~8글자 한글만 입력가능합니다.' />
            <p>형식에 맞도록 닉네임을 설정해주세요.</p>
          </section>
          <section>
            <label>개인정보 제공 동의</label>
            <select />
            <p>개인정보 제공에 동의하셔야 서비스를 이용하실 수 있습니다.</p>
          </section>
        </div>
        <button>회원가입</button>
        <button>로그인</button>
      </div>
      <div>
        <h1>로그인</h1>
        <h3>로그인하여 화장실 리뷰와 나의 쾌변 일지를 작성해보세요!</h3>
        <hr />
        <div>
          <section>
            <label>ID</label>
            <input placeholder='아이디는 4~10글자입니다.' />
          </section>
          <section>
            <label>PASSWORD</label>
            <input placeholder='비밀번호는 8~20글자입니다.' />
          </section>
        </div>
        <button>로그인</button>
        <button>회원가입</button>
      </div>
    </div>
  )
}

export default LoginPage