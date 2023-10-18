import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import Slider1 from "./travel assests/1";
import Slider2 from "./travel assests/2";
import Slider3 from "./travel assests/3";
import Slider4 from "./travel assests/4";
import Slider5 from "./travel assests/5.avif";
import Slider6 from "./travel assests/6";

const Slider = () => {
  return (
    <Carousel
      autoPlay={true}
      showArrows={false}
      interval={3000}
      infiniteLoop={true}
              showThumbs={false}
              showIndicators={false}
    >
      <div>
        <img src={Slider1} />
        <aside className="legend">
          <h1>Pragser Wildsee</h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam
            laboriosam sequi eos illum nihil doloribus architecto. Cum rerum
            alias autem.
          </p>
          <button>View More</button>
        </aside>
      </div>
      <div>
        <img src={Slider2} />
        <aside className="legend">
          <h1>South Tyrol, Italy</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo eos
            voluptatibus ratione facilis pariatur veritatis in. Enim molestiae
            expedita eligendi.
          </p>
          <button>View More</button>
        </aside>
      </div>
      <div>
        <img src={Slider3} />
        <aside className="legend">
          <h1>Cameo Island Beach</h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae
            minima vero veritatis corrupti tempore est cumque at ea assumenda
            illo!
          </p>
          <button>View More</button>
        </aside>
      </div>
      <div>
        <img src={Slider4} />
        <aside className="legend">
          <h1>Burano, Northern Italy</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
            corporis nam nihil nesciunt natus exercitationem, non quidem nostrum
            sint magnam?
          </p>
          <button>View More</button>
        </aside>
      </div>
      <div>
        <img src={Slider5} />
        <aside className="legend">
          <h1>Sydney Opera House</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
            doloribus sequi porro reiciendis dicta voluptatem nam consequatur
            voluptate expedita eaque.
          </p>
          <button>View More</button>
        </aside>
      </div>
      <div>
        <img src={Slider6} />
        <aside className="legend">
          <h1>Matera, Italy</h1>
          <p>
            Matera is one of the most interesting, particular and memorable
            tourist destinations in Italy. Located in the remote southern region
            of Basilicata (also called Lucania), is less known by foreign
            travellers, it is a town famous for its extensive cave-dwelling
            districts, the sassi. Curious visitors can accommodate in caves,
            wander the lanes alongside the picturesque cave-filled cliffs, and
            learn the history of this fascinating place.
          </p>
          <button>View More</button>
        </aside>
      </div>
    </Carousel>
  );
};

export default Slider;
