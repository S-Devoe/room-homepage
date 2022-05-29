import React from 'react'
import './room.css'
import data from '../../data'


function Room({isMobile, handleNext, handlePrevious, selectedArticle}) {
  return (
    <section className="room-article">
      {/* in mobile view, the change slide icon is in the same position as the image  */}
      {isMobile ? (
        <>
          <div className="mobile-article-view">
            <img src={data[selectedArticle].mobileImage} alt="" />

            <div className="mobile-navigate">
              <div className="left-arrow" onClick={handlePrevious}>
                <img src="./images/icon-angle-left.svg" alt="left-arrow" />
              </div>
              <div className="right-arrow" onClick={handleNext}>
                <img src="./images/icon-angle-right.svg" alt="right-arrow" />
              </div>
            </div>
          </div>
          <div className="mobile-article-content">
            <h1>{data[selectedArticle].title}</h1>
            <p>{data[selectedArticle].text}</p>
            <div className="shop-now">
              shop now
              <img src="./images/icon-arrow.svg" alt="icon-arrow" />
            </div>
          </div>
        </>
      ) : (
        <div className="desktop-article-view">
          <div className="image">
            <img src={data[selectedArticle].image} alt="" />
          </div>

          <div className="right-side">
            <div className="article">
              <article>
                <h1>{data[selectedArticle].title}</h1>
                <p>{data[selectedArticle].text}</p>
                <div className="shop-now">
                  shop now
                  <img src="./images/icon-arrow.svg" alt="icon-arrow" />
                </div>
              </article>
            </div>
            <div className="navigate">
              <div className="left" onClick={handlePrevious}>
                <img src="./images/icon-angle-left.svg" alt="left-arrow" />
              </div>
              <div className="right" onClick={handleNext}>
                <img src="./images/icon-angle-right.svg" alt="right-arrow" />
              </div>
            </div>
          </div>
        </div>
      )}

      {/* in desktop view, the slider is at the right hand corner    */}
      {isMobile ? (
        ""
      ) : (
        <div className="right-pt">
          <div className="side-button">
            <div className="left-btn" onClick={handlePrevious}>
              <img src="./images/icon-angle-left.svg" alt="left-arrow" />
            </div>
            <div className="right-btn" onClick={handleNext}>
              <img src="./images/icon-angle-right.svg" alt="right-arrow" />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default Room