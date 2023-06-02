import { theme, Image, Input } from 'antd';
import { Places } from '../places/places';
import { Cities } from '../cities/cities';
const { Search } = Input
const Main = () => {
    const {
        token: { colorBgContainer },
    } = theme.useToken();

    return (
        <>
            <div
                className="site-layout-content"
                style={{
                    background: colorBgContainer,
                    width: "100%",
                }}
            >
                <div style={{
                    width: "100%",
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    position: "relative",
                }}>
                    <Image
                        width={"80%"}
                        src="https://static.tacdn.com/img2/brand/home/homemar2022_dt_trans.webp"
                        alt='search image'
                        bordered={true}
                        preview={false}
                    />
                    <div style={{
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                    }}>
                        <Search size='large' />
                    </div>
                </div>
            </div>
            <h2>Explore top hotels by category</h2>
            <h3>From fam-friendly to next-level luxe and more</h3>
            <Places key="places" />
            <h2>Special offers</h2>
            <Cities key="cities" />
        </>
    );
};
export default Main;