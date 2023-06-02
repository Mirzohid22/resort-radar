import React from 'react';
import MainHeader from '../components/header/header';
import { Layout, Image, Spin, Rate } from 'antd';
import StripeCheckoutButton from '../components/stripeButton';
const { Content, Footer } = Layout;
const Payment = () => {

    const tashkent = {
        name: "Private Tashkent Half Day City Tour",
        imgUrl: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1b/4d/2a/c3/caption.jpg?w=300&h=300&s=1",
        price: 789091,
        grade: 5,
        images: [
            "https://media-cdn.tripadvisor.com/media/attractions-splice-spp-720x480/0a/c3/f0/1c.jpg",
            "https://media-cdn.tripadvisor.com/media/attractions-splice-spp-720x480/0a/c3/fb/68.jpg",
            "https://media-cdn.tripadvisor.com/media/attractions-splice-spp-720x480/0a/c3/fa/39.jpg"
        ],
        description: "This is a private tour that starts at your hotel and covers all the main sightseeing places in Tashkent. We will contact all the customers a day before. Our guide will meet you at your hotel reception or any accommodation in Tashkent city. While we move to our first sight, you will hear general information about the city, and learn how it became the capital. You will get acquainted with the soul and heart of the city - the Amir Timur Square, from which the construction of the new Tashkent began During the tour, we will stop for lunch for tasting the delicious Uzbek plov. Walking through the Old Town, you will move to other quarters, where you will see buildings striving upwards, wide avenues and houses of the century before last. Then you will find yourself in the old part of Tashkent near the historical and architectural complex Khozrati Imom.",
    };
    return (

        <Layout className="layout" style={{ backgroundColor: "#fff", width: "100%", minHeight: "100vh", display: 'flex', verticalAlign: 'center', justifyContent: 'center' }} >
            <MainHeader withSignIn={false} />
            <Content
                style={{
                    padding: '50px 50px',
                }}
            >
                <Spin spinning={false}>
                    <div style={{ width: "100%", position: "relative", padding: "50px" }}>
                        <div style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                        }}>
                            <Image src={tashkent.images[0]} alt={tashkent.name} width={600} preview />
                            <div style={{
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "center",
                            }}>
                                <Image src={tashkent.images[1]} alt={tashkent.name} width={300} preview />
                                <Image src={tashkent.images[2]} alt={tashkent.name} width={300} preview />
                            </div>
                        </div>
                        <h2>{tashkent.name.length > 40 ? tashkent.name.slice(0, 27) + "..." : tashkent.name}</h2>
                        <Rate disabled defaultValue={tashkent.grade} />
                        <p>{tashkent.description}</p>
                    </div>
                    <div style={{
                        display: "flex",
                        justifyContent: "center",
                    }}>
                        <StripeCheckoutButton price={tashkent.price} />
                    </div>
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
export default Payment;

