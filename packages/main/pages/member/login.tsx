import { useState, ReactElement } from 'react';
import styles from 'styled-components';
import aes from 'crypto-js/aes';
import Router from 'next/router';
import { post } from '../../utils/axios';

const Form = styles.div`{
    display: flex;
    flex-flow: column;
    align-items: center;
    height: 85vh;
    justify-content: center;
}`;

const FormTitle = styles.div`{
    font-size: 48px;
    margin: 24px 0;
}`;

const Id = styles.input`{
    width: 35rem;
    max-width: 35rem;
    height: 5.2rem;
    max-height: 5.2rem;
    border: solid;
    font-size: 24px;
    padding: 16px;
    color: #000;
}`;

const Password = styles.input`{
    width: 35rem;
    max-width: 35rem;
    height: 5.2rem;
    max-height: 5.2rem;
    margin: 1rem 0;
    border: solid;
    font-size: 24px;
    padding: 16px;
}`;

const LoginButton = styles.button`{
    width: 35rem;
    max-width: 35rem;
    height: 5.2rem;
    max-height: 5.2rem;
    margin: 1rem 0;
    border: solid;
    font-size: 24px;
    padding: 16px;
}`;

const Login = (): ReactElement => {
  const [formData, setFormData] = useState({});

  const changeFormData = (e) => {
    const formKey = e.target.name;
    const value = e.target.value;
    setFormData({
      ...formData,
      [formKey]: value,
    });
  };

  const clickLogin = async () => {
    const cryptoData = aes
      .encrypt(JSON.stringify(formData), process.env.SECRET_KEY)
      .toString();
    const res = await post('/api/auth/login', {
      formData: cryptoData,
    });
    if (res.status === 200) {
      localStorage.setItem('token', res.data.result);
      await Router.push('/');
    } else {
      alert('실패');
    }
  };

  return (
    <>
      <Form>
        <FormTitle>로그인</FormTitle>
        <Id name="id" onChange={changeFormData} placeholder="아이디" />
        <Password
          name="password"
          onChange={changeFormData}
          placeholder="비밀번호"
          type="password"
        />
        <LoginButton onClick={clickLogin}>로그인</LoginButton>
      </Form>
    </>
  );
};

export default Login;
