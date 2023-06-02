import React, { useEffect } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { useSelector, useDispatch } from "react-redux";
import { Image } from "antd";
import { setPlaces } from "../../app/features/places"
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import axios from "axios";

import "./styles.css";

// import required modules
import { Pagination } from "swiper";

export const Places = () => {
    const dispatch = useDispatch();
    const places = useSelector(state => state.places.places);
    useEffect(() => {
        const fetchPlaces = async () => {
            await axios.get("http://localhost:5000/places").then(res => res.data).then(data => dispatch(setPlaces(data.data)))
                .catch(err => console.log(err))
        }

        fetchPlaces();
    }, [dispatch])
    return (
        <>
            <Swiper
                slidesPerView={4}
                spaceBetween={0}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                {places.map((place, index) => {
                    return <SwiperSlide key={index} style={{ width: "20%" }}>
                        <div style={{ width: "100%", position: "relative" }}>
                            <Image src={place.imgUrl} alt={place.name} width={280} preview={false} />
                            <span style={{
                                width: "80%",
                                position: "absolute",
                                top: "90%",
                                left: "40%",
                                color: "white",
                                transform: "translate(-50%, -50%)",
                                fontWeight: "bold",
                                fontSize: "30px"
                            }} >{place.name}</span>
                        </div>
                    </SwiperSlide>

                })}
            </Swiper>
        </>
    );
}
