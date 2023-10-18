import React from 'react';
import Styles from "./_pages.module.css";
import Slider from './sliders/Slider';
import SearchHotel from './displayPages/SearchHotel';



const Home = () => {
  return (
    <section id={Styles.pagesBlock}>
      <article>
        <Slider />
        <SearchHotel/>
      </article>
    </section>
  )
}

export default Home
