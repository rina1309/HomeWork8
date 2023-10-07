import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import Photo1 from './images/photo1.jpeg';
import Photo2 from './images/photo2.jpeg';
import Photo3 from './images/photo3.avif';
import Photo4 from './images/photo4.jpeg';

function ImageSlider() {
  const images = [Photo1, Photo2, Photo3, Photo4];

  const settings = {
    dots: true,
    vertical: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  return (
    <div className="image-slider-container">
      <Slider {...settings}>
        {images.map((imageUrl, index) => (
          <div key={index}>
            <img src={imageUrl} alt={`Image ${index + 1}`} />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default ImageSlider;




