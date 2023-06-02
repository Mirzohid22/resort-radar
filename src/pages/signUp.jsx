import React, { useState } from 'react';
import { useNavigate, } from 'react-router-dom';
import MainHeader from '../components/header/header';
import axios from 'axios'
import { useDispatch } from 'react-redux';
import { Layout, Button, Checkbox, Form, Input, Spin } from 'antd';
import { setUser } from '../app/features/user';
const { Content, Footer } = Layout;
const SignUp = () => {

    const history = useNavigate()
    const dispatch = useDispatch()
    const [loading, setLoading] = useState(false);
    const onFinish = async (values) => {
        setLoading(true)
        await axios.get(`http://localhost:5000/login?login=${values.email}&password=${values.password}`).then(res => res.data).then(user => dispatch(setUser(user)))
        // await axios.get(`${process.env.REACT_APP_SERVER}/login?login=${values.username}&password=${values.password}`).then(res => res.data).then(admin => dispatch(setAdmin(admin)))
        setLoading(false)
        history('/')
    };

    const onFinishFailed = (fail) => {
        console.log('Failed', fail);
    };
    return (

        <Layout className="layout" style={{ backgroundColor: "#fff", width: "100%", minHeight: "100vh", display: 'flex', verticalAlign: 'center', justifyContent: 'center' }} >
            <MainHeader />
            <Content
                style={{
                    padding: '50px 50px',
                }}
            >
                <Spin spinning={loading}>
                    <Form
                        name="basic"
                        labelCol={{ span: 8 }}
                        wrapperCol={{ span: 16 }}
                        initialValues={{ remember: true }}
                        onFinish={onFinish}
                        onFinishFailed={onFinishFailed}
                        autoComplete="off"
                        style={{
                            width: "400px",
                            margin: '0 auto'
                        }}
                    >
                        <Form.Item
                            label="Name"
                            name="name"
                            rules={[{ required: true, message: 'Please input your email!' }]}
                        >
                            <Input />
                        </Form.Item>
                        <Form.Item
                            label="Email"
                            name="email"
                            rules={[{ required: true, message: 'Please input your email!' }]}
                        >
                            <Input />
                        </Form.Item>

                        <Form.Item
                            label="Password"
                            name="password"
                            rules={[{ required: true, message: 'Please input your password!' }]}
                        >
                            <Input.Password />
                        </Form.Item>
                        <Form.Item
                            label="Address"
                            name="address"
                            rules={[{ required: true, message: 'Please input your email!' }]}
                        >
                            <Input />
                        </Form.Item>

                        <Form.Item name="remember" valuePropName="checked" wrapperCol={{ offset: 8, span: 16 }}>
                            <Checkbox>Remember me</Checkbox>
                        </Form.Item>

                        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                            <Button type="primary" htmlType="submit">
                                Submit
                            </Button>
                        </Form.Item>
                    </Form>
                </Spin>
            </Content>
            <Footer
                style={{
                    textAlign: 'center',
                }}
            >
                Resort React ©2023 Created by Mirzohid Salimov
            </Footer>
        </Layout>
    );
};
export default SignUp;

