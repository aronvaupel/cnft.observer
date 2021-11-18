import React, { useState } from "react";
import Particle from "../components/Particle";
import SliderMainParticle from "../components/SliderMainParticle";
import FeatureBox from "../components/FeatureBox";
import CarouselCollectionRedux from "../components/CarouselCollectionRedux";
import CarouselRecentlySoldRedux from "../components/CarouselRecentlySoldRedux";
import CarouselUpcomingDropsRedux from "../components/CarouselUpcomingDropsRedux";
import TopProjectsListRedux from "../components/TopProjectsListRedux";
import CarouselChartsRedux from "../components/CarouselChartsRedux";
import Footer from "../components/footer";
import Articles from "../components/Articles";
import { createGlobalStyle } from "styled-components";
import News from "../components/News";
import { Link } from "@reach/router";

const GlobalStyles = createGlobalStyle`
  header#myHeader .logo .d-block{
    display: none !important;
  }
  header#myHeader .logo .d-none{
    display: block !important;
  }
  .navbar .mainside a{
    background: #8364e2;
    &:hover{
      box-shadow: 2px 2px 20px 0px #8364e2;
    }
  }
  .item-dropdown{
    .dropdown{
      a{
        &:hover{
          background: #8364e2;
        }
      }
    }
  }
  .btn-main{
    background: #8364e2;
    &:hover{
      box-shadow: 2px 2px 20px 0px #8364e2;
    }
  }
  p.lead{
    color: #a2a2a2;
  }
  .navbar .navbar-item .lines{
    border-bottom: 2px solid #8364e2;
  }
  .jumbotron.no-bg{
    background-repeat: repeat;
    background-size: cover;
    background-position: bottom;
    background-repeat: no-repeat;
  }
  #tsparticles{
    top: 0;
  }
  .text-uppercase.color{
    color: #8364e2;
  }
  .de_count h3 {
    font-size: 36px;
    margin-bottom: 0px;
  }
  .de_count h5{
    font-size: 14px;
    font-weight: 500;
  }
  h2 {
    font-size: 30px;
  }
  .box-url{
    padding: 10px;
    padding-top:30px;
    text-align: center;
    h4{
      font-size: 16px;
    }
  }
  .de_countdown{
    border: solid 2px #8364e2;
      .slick-slide img {
    display: inline;
}
.btn-main.inline {
    margin-right:0;
}
  }

  .author_list_pp, .author_list_pp i, 
  .nft_coll_pp i, .feature-box.style-3 i, 
  footer.footer-light #form_subscribe #btn-subscribe i, 
  #scroll-to-top div{
    background: #8364e2;
  }
  footer.footer-light .subfooter .social-icons span i{
    background: #403f83;
  }
  .author_list_pp:hover img{
    box-shadow: 0px 0px 0px 2px #8364e2;
  }
  .nft__item_action span{
    color: #8364e2;
  }
  .feature-box.style-3 i.wm{
    color: rgba(131,100,226, .1);
  }
  @media only screen and (max-width: 1199px) {
    .navbar{
      
    }
    .navbar .menu-line, .navbar .menu-line1, .navbar .menu-line2{
      background: #fff;
    }
    .item-dropdown .dropdown a{
      color: #fff !important;
    }
  }

`;

const homeone = () => {
  return (
    <div>
      <GlobalStyles />
      <section
        className="jumbotron no-bg"
        style={{ backgroundImage: `url(${"./img/background/8.jpg"})` }}
      >
        <Particle />
        <SliderMainParticle />
      </section>

      <section className="container no-top no-bottom">
        <div className="row">
          <div className="spacer-double"></div>
          <div className="col-lg-12 mb-2 calendar-row">
            <h2 className="headline-responsiveness">Recently Sold</h2>
            <Link
              to="/allUpcomingDrops"
              style={{
                textDecoration: "none",
              }}
            >
              <span
                className=" inline lead link-color"
                id="calendar-span"
                style={{
                  textDecoration: "none",
                }}
              >
                View all
              </span>
            </Link>
          </div>
        </div>
        <CarouselRecentlySoldRedux />
      </section>

      <section className="container no-top no-bottom">
        <div className="row">
          <div className="spacer-double"></div>
          <div className="col-lg-12 mb-2 calendar-row">
            <h2 className="headline-responsiveness">Upcoming Drops</h2>
            <Link
              to="/upcoming-cnft-drops"
              id="calendar-span"
              style={{
                textDecoration: "none",
              }}
            >
              <span className="inline lead link-color">View all</span>
            </Link>
          </div>
        </div>
        <CarouselUpcomingDropsRedux />
      </section>

      <section className="container no-top no-bottom">
        <div className="row">
          <div className="spacer-double"></div>
          <div className="col-lg-12 mb-2 topProjects-row calendar-row">
            <h2 className="headline-responsiveness">Top Projects</h2>
            <span
              onClick={() => window.open("#", "_self")}
              className=" inline lead link-color"
              id="calendar-span"
            >
              View all
            </span>
          </div>
          <div className="col-lg-12 topProjects-main">
            <TopProjectsListRedux />
          </div>
        </div>
      </section>

      <section className="container no-top no-bottom">
        <div className="row">
          <div className="spacer-double"></div>
          <div className="col-lg-12 mb-2 calendar-row">
            <h2 className="headline-responsiveness">Hot Collections</h2>
            <span
              onClick={() => window.open("#", "_self")}
              className=" inline lead link-color"
              id="calendar-span"
            >
              View all
            </span>
          </div>
          <div className="col-lg-12">
            <CarouselCollectionRedux />
          </div>
        </div>
      </section>

      <section className="container no-top no-bottom">
        <div className="row">
          <div className="spacer-double"></div>
          <div className="col-lg-12 mb-3 calendar-row">
            <h2 className="headline-responsiveness">News</h2>
            <span
              onClick={() => window.open("#", "_self")}
              className=" inline lead link-color"
              id="calendar-span"
            >
              View all
            </span>
          </div>
          <News />
        </div>
      </section>

      <section className="container no-top no-bottom">
        <div className="row">
          <div className="spacer-double"></div>
          <div className="col-lg-12 mb-2 calendar-row">
            <h2 className="headline-responsiveness">Statistics</h2>
            <span
              onClick={() => window.open("#", "_self")}
              className=" inline lead link-color"
              id="calendar-span"
            >
              View all
            </span>
          </div>
        </div>
        <CarouselChartsRedux />
      </section>

      <section className="container no-top no-bottom">
        <div className="row">
          <div className="spacer-double"></div>
          <div className="col-lg-12 mb-3 calendar-row">
            <h2 className="headline-responsiveness">Basics</h2>
            <span
              onClick={() => window.open("#", "_self")}
              className=" inline lead link-color"
              id="calendar-span"
            >
              View all
            </span>
          </div>
          <Articles />
        </div>
      </section>

      <Footer />
    </div>
  );
};
export default homeone;
