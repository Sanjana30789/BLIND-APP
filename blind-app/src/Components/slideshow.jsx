import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import '../styles/Slideshow.css';

const Slideshow = () => (
  <section className="slideshow">
    <Carousel autoPlay infiniteLoop showThumbs={false}
    interval={1000}
    showStatus={false}
    showArrows={true}
    style={{ height: '400px' }}
  >
      <div>
        <img src="/images/blind3.png" alt="Blind Assistance 1"  style={{ height: '600px', objectFit: 'cover' }}  />
      </div>
      <div>
        <img src="/images/blind2.png" alt="Blind Assistance 2" style={{ height: '600px', objectFit: 'cover' }} />
      </div>
      {/* <div>
        <img src="/images/blind-leading.webp" alt="Blind Assistance 3" style={{ height: '600px', objectFit: 'cover' }} />
      </div> */}
    </Carousel>
  </section>
);

export default Slideshow;
