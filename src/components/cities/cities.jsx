import React, { useEffect } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { useSelector, useDispatch } from "react-redux";
import { Button, Image, Rate } from "antd";
import { useNavigate } from "react-router-dom";
import { setCities } from "../../app/features/cities"
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import axios from "axios";

import "./styles.css";

// import required modules
import { Pagination } from "swiper";

export const Cities = () => {
    const dispatch = useDispatch();
    const history = useNavigate();
    const cities = useSelector(state => state.cities.cities);
    console.log("citymanuuuuu: ", cities)
    useEffect(() => {
        const fetchCities = async () => {
            const response = await axios.get("http://localhost:5000/cities").then(res => res.data).then(data => dispatch(setCities(data.data)))
                .catch(err => console.log(err))
        }
        console.log("citymanuuuuu: ", cities)
        fetchCities();
    }, [dispatch])
    return (
        <>
            <Swiper
                slidesPerView={4}
                spaceBetween={10}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                {cities.map((city, index) => {
                    return <SwiperSlide key={index} style={{ width: "24%" }}>
                        <div style={{ width: "100%", position: "relative" }}>
                            <Image src={city.imgUrl} alt={city.name} width={250} preview={false} />
                            <h4>{city.name.length > 40 ? city.name.slice(0, 27) + "..." : city.name}</h4>
                            <h6 >{city.price} UZS</h6>
                            <div style={{
                                display: "flex",
                                justifyContent: "space-evenly",
                            }}>
                                <Rate allowHalf allowClear={false} defaultValue={city.grade} />
                                <Button disabled={city.price !== 789091} onClick={() => history(`/payment`)} >book now</Button>
                            </div>

                        </div>
                    </SwiperSlide>

                })}
            </Swiper>
        </>
    );
}
