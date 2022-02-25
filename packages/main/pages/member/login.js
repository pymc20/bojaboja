/* @flow */
import * as React from "react";
import styles from "styled-components"

const Form = styles.div`{
    display: flex;
    flex-flow: column;
    align-items: center;
}`

const FormTitle = styles.div`{
    font-size: 48px;
    margin: 24px 0;
}`

const Id = styles.input`{
    width: 35rem;
    max-width: 35rem;
    height: 5.2rem;
    max-height: 5.2rem;
    border: solid;
    font-size: 24px;
    padding: 16px;
    color: #000;
}`

const Password = styles.input`{
    width: 35rem;
    max-width: 35rem;
    height: 5.2rem;
    max-height: 5.2rem;
    margin: 1rem 0;
    border: solid;
    font-size: 24px;
    padding: 16px;
}`

const LoginButton = styles.button`{
    width: 35rem;
    max-width: 35rem;
    height: 5.2rem;
    max-height: 5.2rem;
    margin: 1rem 0;
    border: solid;
    font-size: 24px;
    padding: 16px;
}`

const Login = (): React.Node => {
    const [formData, setFormData] = React.useState({});

    const changeFormData = (e) => {
        const formKey = e.target.name;
        const formData = e.target.value;
        setFormData({
            [formKey]: formData
        })
    }
    return (
        <>
            <Form>
                <FormTitle>로그인</FormTitle>
                <Id name="id" onChange={changeFormData} placeholder="아이디"/>
                <Password name="password" onChange={changeFormData} placeholder="비밀번호" type="password"/>
                <LoginButton>로그인</LoginButton>
            </Form>
        </>
    )
}

export default Login;