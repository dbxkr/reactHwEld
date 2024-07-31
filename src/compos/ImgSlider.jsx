import React, { useState } from "react";
import Slider from "react-slick";

const ImageSlider = () => {
  const [hover, setHover] = useState(false);
  const imgSrc = hover ? "/img/slide/Reda2.png" : "/img/slide/Reda1.png";
  const images = Array.from(
    { length: 9 },
    (_, i) => `/img/slide/eld${i + 1}.png`
  );

  const settings = {
    dots: true,
    infinite: true, // 이미지가 계속 반복됩니다.
    speed: 2000, // 넘어가는데 2초 걸림
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true, // 자동으로 슬라이드가 넘어갑니다.
    autoplaySpeed: 5000, // 5초마다 자동으로 슬라이드가 넘어갑니다.
    adaptiveHeight: true, // 높이가 너비에 맞게 자동으로 설정됩니다.
  };

  return (
    <div className="w-4/5 slider-body">
      <Slider {...settings}>
        {images.map((img, index) => (
          <div className="slider-compo">
            <img
              className="slider-img"
              key={index}
              src={img}
              alt={`img${index + 1}`}
            />
          </div>
        ))}
        <div className="slider-compo">
          <img
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            className={`slider-img`}
            src={imgSrc}
            alt="Image 2"
          />
        </div>
      </Slider>
    </div>
  );
};

export default ImageSlider;
