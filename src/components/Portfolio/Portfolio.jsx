import React, { useContext } from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css";
import ChatPortfolio from "../../img/ChatPortfolio.png";
import Portfolioimg from "../../img/portfolio.png";
import Todolist from "../../img/todolist.png";
import Gaetanmotors from "../../img/gaetanmotors.png";

import { themeContext } from "../../Context";
const Portfolio = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="portfolio" id="portfolio">
      {/* heading */}
      <span style={{color: darkMode?'white': ''}}>Recent Projects</span>
      <span>Portfolio</span>

      {/* slider */}
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className="portfolio-slider"
      >
         <SwiperSlide>
          <img src={Portfolioimg} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={ChatPortfolio} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Todolist} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Gaetanmotors} alt="" />
        </SwiperSlide>
       
       
      </Swiper>
    </div>
  );
};

export default Portfolio;
