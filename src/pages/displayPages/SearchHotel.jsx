import React from "react";
import Styles from "./_booking.module.css";
import { FaCalculator } from "react-icons/fa";

const SearchHotel = () => {
  return (
    <section id={Styles.searchHotel}>
      <article>
        <form>
          <div className="form-group">
            <input type="text" placeholder="Where are you going ?" />
          </div>
          <aside className={Styles.dateSearch}>
            <div className="form-group">
              <input
                type="text"
                placeholder="Check-in"
                className="form-control"
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                placeholder="Check-out"
                className="form-control"
              />
            </div>
          </aside>
          <div className="form-group">
            <select>
              <option value="adults">Adults</option>
              <option value="children">Children</option>
              <option value="rooms">Rooms</option>
            </select>
          </div>
          <div className="form-group">
            <button>Search </button>
          </div>
        </form>
      </article>
    </section>
  );
};

export default SearchHotel;
