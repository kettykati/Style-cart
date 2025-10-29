import React from 'react';
import Categories from './home/Categories';
import Featured from './home/Featured';

export default function Home(){
  return (
    <>
      <section className="banner">
        <div className="container">
          <h1>Shop the Latest Fashion Trends</h1>
          <p>Exclusive Styles | Great Prices | Fast Delivery</p>
          <button className="btn" style={{marginTop:16}}>Explore Now</button>
        </div>
      </section>

      <div className="container">
        <Categories />
        <Featured />
      </div>
    </>
  );
}
