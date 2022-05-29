import React from 'react'
import './furniture.css'

function Furniture() {
  return (
    <section className="bottom">
      <div className="image1">
        <img src="./images/image-about-dark.jpg" alt="dark" />
      </div>
      <div className="furniture-text">
        <h2>About our furniture</h2>
        <p>
          Our multifunctional collection blends design and function to suit your
          individual taste. Make each room unique, or pick a cohesive theme that
          best express your interests and what inspires you. Find the furniture
          pieces you need, from traditional to contemporary styles or anything
          in between. Product specialists are available to help you create your
          dream space.
        </p>
      </div>
      <div className="image2">
        <img src="./images/image-about-light.jpg" alt="light" />
      </div>
    </section>
  );
}

export default Furniture