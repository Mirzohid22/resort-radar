import { Layout } from 'antd';
import { Routes, Route } from 'react-router-dom';
import Main from '../components/main/main';
import MainHeader from '../components/header/header';
const { Content, Footer } = Layout;
const LayoutBaseMain = () => {

    return (
        <Layout className="layout" style={{ backgroundColor: "#fff", width: "100%" }} >
            <MainHeader withSignIn={false} />
            <Content
                style={{
                    padding: '50px 50px',
                }}
            >
                <Routes>
                    <Route path="/" key="main" element={<Main />} />
                    <Route path="/notifications" key="notifications" element={<Main />} />
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
export default LayoutBaseMain;