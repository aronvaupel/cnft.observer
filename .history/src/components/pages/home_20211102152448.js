import React from "react";
import Particle from "../components/Particle";
import SliderMainParticle from "../components/SliderMainParticle";
import FeatureBox from "../components/FeatureBox";
import CarouselCollectionRedux from "../components/CarouselCollectionRedux";
import CarouselNewRedux from "../components/CarouselNewRedux";
import CarouselUpcomingDropsRedux from "../components/CarouselUpcomingDropsRedux";
import TopProjectsListRedux from "../components/TopProjectsListRedux";
import Footer from "../components/footer";
import { createGlobalStyle } from "styled-components";

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
    text-align: center;
    h4{
      font-size: 16px;
    }
  }
  .de_countdown{
    border: solid 2px #8364e2;
    position:relative;
    right:0;
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

const homeone = () => (
  <div>
    <GlobalStyles />
    <section
      className="jumbotron no-bg"
      style={{ backgroundImage: `url(${"./img/background/8.jpg"})` }}
    >
      <Particle />
      <SliderMainParticle />
    </section>

    <section className="container no-bottom">
      <div className="row">
        <div className="spacer-double"></div>
        <div className="col-lg-12 mb-2 calendar-row">
          <h2>Upcoming drops</h2>

          <span
            onClick={() => window.open("#", "_self")}
            className="btn-main inline lead"
            id="calendar-span"
          >
            View all
          </span>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-2 col-sm-4 col-6 mb30">
          <span className="box-url">
            <img src="./img/wallet/1.png" alt="" className="mb20" />
            <h4>Project 1</h4>
          </span>
        </div>

        <div className="col-lg-2 col-sm-4 col-6 mb30">
          <span className="box-url">
            <img src="./img/wallet/2.png" alt="" className="mb20" />
            <h4>Project 2</h4>
          </span>
        </div>

        <div className="col-lg-2 col-sm-4 col-6 mb30">
          <span className="box-url">
            <img src="./img/wallet/3.png" alt="" className="mb20" />
            <h4>Project 3</h4>
          </span>
        </div>

        <div className="col-lg-2 col-sm-4 col-6 mb30">
          <span className="box-url">
            <img src="./img/wallet/4.png" alt="" className="mb20" />
            <h4>Project 4</h4>
          </span>
        </div>

        <div className="col-lg-2 col-sm-4 col-6 mb30">
          <span className="box-url">
            <img src="./img/wallet/5.png" alt="" className="mb20" />
            <h4>Project 5</h4>
          </span>
        </div>

        <div className="col-lg-2 col-sm-4 col-6 mb30">
          <span className="box-url">
            <img src="./img/wallet/6.png" alt="" className="mb20" />
            <h4>Project 6</h4>
          </span>
        </div>
      </div>
    </section>

    <section className="container no-top no-bottom">
      <div className="row">
        <div className="spacer-double"></div>
        <div className="col-lg-12 mb-2">
          <h2>Upcoming Drops</h2>
        </div>
      </div>
      <CarouselUpcomingDropsRedux />
    </section>

    <section className="container no-top no-bottom">
      <div className="row">
        <div className="spacer-double"></div>
        <div className="col-lg-12 mb-2">
          <h2>Recently sold CNFTs</h2>
        </div>
      </div>
      <CarouselNewRedux />
    </section>

    <section className="container no-top">
      <div className="row">
        <div className="spacer-double"></div>
        <div className="col-lg-12 mb-3">
          <h2>General introduction to Cardano and CNFTs</h2>
        </div>
        <FeatureBox />
      </div>
    </section>

    <section className="container no-top no-bottom">
      <div className="row">
        <div className="spacer-double"></div>
        <div className="col-lg-12">
          <h2>Top Projects</h2>
        </div>
        <div className="col-lg-12">
          <TopProjectsListRedux />
        </div>
      </div>
    </section>

    <section className="container no-top no-bottom">
      <div className="row">
        <div className="spacer-double"></div>
        <div className="col-lg-12 mb-2">
          <h2>Hot Collections</h2>
        </div>
        <div className="col-lg-12">
          <CarouselCollectionRedux />
        </div>
      </div>
    </section>

    <section className="container no-top">
      <div className="row">
        <div className="spacer-double"></div>
        <div className="col-lg-12 mb-3">
          <h2>Create and Sell Now</h2>
        </div>
        <FeatureBox />
      </div>
    </section>

    <Footer />
  </div>
);
export default homeone;
