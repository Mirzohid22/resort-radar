import { Layout, Menu, Avatar } from 'antd';
import { useEffect, useState } from 'react';
import { MailOutlined, UserAddOutlined, } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
const { Header, } = Layout;
const MainHeader = ({ withSignIn = true }) => {

    const history = useNavigate();
    const dispatch = useDispatch();
    const user = useSelector((state) => state.user.user);
    const [items, setItems] = useState([
        ({
            label: 'Notifications',
            key: 'mail',
            icon: <MailOutlined />,
            onClick: () => { history('/notifications') },
        })
    ]);
    useEffect(() => {
        if (withSignIn) {
            setItems(items => [...items,
            {
                label: 'Sign In',
                key: 'sign in',
                icon: <UserAddOutlined />,
                onClick: () => { history('/signIn') },
            },
            ].slice(0, 2))
        }
    }, [dispatch])
    return (<Header
        style={{
            display: 'flex',
            alignItems: 'space-between',
            justifyContent: 'space-between',
            backgroundColor: "#fff",
            border: "1px solid #f0f0f0",
            width: "100%",
        }}
    >
        <h1 className="demo-logo" style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
        }}
            onClick={() => { history('/') }}
        >
            Resort Radar
        </h1>
        <div
            style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-center',
                width: "30%",
            }}>
            <Menu
                theme="light"
                mode="horizontal"
                style={{
                    minWidth: '90%',
                    justifyContent: 'right',
                }}
                items={items}
            />
            <Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel&key=1" size={"large"} />
        </div>
    </Header>
    );
};
export default MainHeader;