import {  Layout } from 'antd';
import { Tabs } from 'antd';
import MainHeader from '../components/header/header';
const {  Content, Footer } = Layout;
const Inbox = () => {
    const onChange = (key) => {
        console.log(key);
    };
    const tabs = [
        {
            key: '1',
            label: `Newest`,
            children: `No alerts or messages at this time`,
        },
        {
            key: '2',
            label: `Unread`,
            children: `No alerts or messages at this time`,
        },
        {
            key: '3',
            label: `Inquiries`,
            children: `No alerts or messages at this time`,
            disabled: true
        },
    ];

    
    return (
        <Layout className="layout" style={{ backgroundColor: "#fff", width: "100%", minHeight: "100vh" }} >
            <MainHeader />
            <Content
                style={{
                    padding: '50px 50px',
                }}
            >
                <Tabs defaultActiveKey="1" items={tabs} onChange={onChange} />

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
export default Inbox;