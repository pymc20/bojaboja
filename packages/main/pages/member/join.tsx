import { ReactElement, useState } from 'react';
import styled from 'styled-components';
import aes from 'crypto-js/aes';
import { useRouter } from 'next/router';
import { post } from '../../utils/axios';

const Form = styled.div`
   {
    display: flex;
    flex-flow: column;
    align-items: center;
  }
`;

const FormTitle = styled.div`
   {
    font-size: 48px;
    margin: 24px 0;
  }
`;

const Id = styled.input`
   {
    width: 35rem;
    max-width: 35rem;
    height: 5.2rem;
    max-height: 5.2rem;
    border: solid;
    font-size: 24px;
    padding: 16px;
    color: #363636;
  }
`;

const Password = styled.input`
   {
    width: 35rem;
    max-width: 35rem;
    height: 5.2rem;
    max-height: 5.2rem;
    margin-top: 1rem;
    border: solid;
    font-size: 24px;
    padding: 16px;
  }
`;

const LoginButton = styled.button`
   {
    width: 35rem;
    max-width: 35rem;
    height: 5.2rem;
    max-height: 5.2rem;
    margin: 1rem 0;
    border: solid;
    font-size: 24px;
    padding: 16px;
  }
`;

function Login(): ReactElement {
  const router = useRouter();
  const [formData, setFormData] = useState({});

  const changeFormData = (e) => {
    const formKey = e.target.name;
    const value = e.target.value;
    setFormData({
      ...formData,
      [formKey]: value,
    });
  };

  const join = async () => {
    const joinData = aes
      .encrypt(JSON.stringify(formData), process.env.SECRET_KEY)
      .toString();
    await post('/api/auth/join', { joinData });
    await router.push('/member/login');
  };

  return (
    <>
      <Form>
        <FormTitle>회원가입</FormTitle>
        <Id name="id" onChange={changeFormData} placeholder="아이디" />
        <Password
          name="password"
          onChange={changeFormData}
          placeholder="비밀번호"
          type="password"
        />
        <Password
          name="passwordCheck"
          onChange={changeFormData}
          placeholder="비밀번호 확인"
          type="password"
        />
        <LoginButton onClick={join}>가입하기</LoginButton>
      </Form>
    </>
  );
}

export default Login;
