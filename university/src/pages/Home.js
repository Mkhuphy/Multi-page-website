import React from "react";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/scss";
import "swiper/scss/pagination";
import "swiper/scss/navigation";
import { Pagination, Navigation } from "swiper";
import { recentNews, researchHighlights } from "../utils/constants";
import { iconsReact } from "../utils/icons";
import RecentNewsCard from "../components/RecentNewsCard";
const Home = () => {
  const [slide, setSlide] = useState(0);
  const slides = [];
  return (
    <main className="home">
      <div className="container">
        <header className="header">
          <h3>Specialization</h3>
          <p>
            <i>
            Environmental Engineering
            </i>
          </p>
          <h3>Research Interest</h3>
          <p>
            <i>
            Environmental geochemistry of heavy metals and inorganic 
            contaminants, Investigate physical and chemical processes 
            such as adsorption, precipitation, and reduction-oxidation 
            occurring at mineral-water-microbial interfaces, and relate 
            them to larger scales, Predict inorganic contaminant fate 
            and transport through surface complexation and flow-through 
            reactor modeling, Develop tools to target contaminant 
            remediation in natural as well as engineered environments.
            </i>
          </p>
        </header>
        {/* <section className="swiper-section-wrapper">
          <header className="header">
            <h3>Research Highlights</h3>
          </header>
          <div className="swiper-section">
            <Swiper
              breakpoints={{
                320: {
                  slidesPerView: 1,
                  spaceBetween: 20,
                },
              }}
              spaceBetween={16}
              loop={true}
              loopFillGroupWithBlank={true}
              grabCursor={true}
              navigation={{
                nextEl: ".research-swiper-button-next",
                prevEl: ".research-swiper-button-prev",
              }}
              modules={[Pagination, Navigation]}
              className="w-full"
              onSlideChange={(swiper) => {
                setSlide(swiper.activeIndex);
              }}
            >
              <div className="">
                {researchHighlights.map((item, index) => (
                  <SwiperSlide key={index}>
                    <div className="slides-img">
                      <img src={item.imgpath} alt="labs" />
                    </div>
                  </SwiperSlide>
                ))}
              </div>
            </Swiper>
            <div className="research-swiper-button-prev swiper-btn">
              {iconsReact.left}
            </div>
            <div className="research-swiper-button-next swiper-btn">
              {iconsReact.right}
            </div>
          </div>
        </section> */}
        {/* <section className="recent-news"> */}
          {/* <header>
            <h3>Recent News</h3>
            <div className="line"></div>
          </header>

          <div className="recent-news-wrapper">
            {recentNews.map((item, index) => (
              <RecentNewsCard key={index} item={item} />
            ))}
          </div> */}
        {/* </section> */}
      </div>
    </main>
  );
};

export default Home;
