import { Layout } from 'antd';
import { Routes, Route } from 'react-router-dom';
import Main from '../components/main/main';
import MainHeader from '../components/header/header';
import { useSelector } from 'react-redux';
const {  Content, Footer } = Layout;

const LayoutBase = () => {
    const user = useSelector((state) => state.user.user);
    return (
        <Layout className="layout" style={{ backgroundColor: "#fff", width: "100%" }} >
            <MainHeader withSignIn={user ? false : true} />
            <Content
                style={{
                    padding: '50px 50px',
                }}
            >
                <Routes>
                    <Route path="/" key="main" element={<Main />} />
                </Routes>

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
export default LayoutBase;