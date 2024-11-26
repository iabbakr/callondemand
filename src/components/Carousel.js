import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

const Carousel = () => {
    return (
        <div className="carousel-container">
            <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                navigation
                pagination={{ clickable: true }}
                autoplay={{ delay: 3000 }}
                loop={true}
                className="carousel"
            >
                <SwiperSlide>
                    <div className="carousel-slide">
                        <img
                            src="https://via.placeholder.com/1024x400/FF7F50/FFFFFF?text=Delicious+Meals"
                            alt="Delicious Meals"
                        />
                        <h3 className="carousel-caption">Taste the Best of Local Cuisine!</h3>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="carousel-slide">
                        <img
                            src="https://via.placeholder.com/1024x400/87CEFA/FFFFFF?text=Quick+Delivery"
                            alt="Quick Delivery"
                        />
                        <h3 className="carousel-caption">Fast and Reliable Delivery Service!</h3>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="carousel-slide">
                        <img
                            src="https://via.placeholder.com/1024x400/6A5ACD/FFFFFF?text=Fresh+Ingredients"
                            alt="Fresh Ingredients"
                        />
                        <h3 className="carousel-caption">Fresh Ingredients, Always!</h3>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Carousel;
