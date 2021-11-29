import React from "react";
import AllRecentlySoldRedux from "../components/AllRecentlySoldRedux";
import Footer from "../components/footer";
import { createGlobalStyle } from "styled-components";
import Reveal from "react-awesome-reveal";
import { keyframes } from "@emotion/react";
import { filterCategories, filterStatus, filterItemsType, filterNftTitle } from '../../store/actions';


const GlobalStyles = createGlobalStyle`
  header#myHeader.navbar.white {
    background: #212428;
  }
  #form_quick_search #btn-submit i {
  background: #8364e2;
  }
`;

const fadeInUp = keyframes`
  0% {
    opacity: 0;
    -webkit-transform: translateY(40px);
    transform: translateY(40px);
  }
  100% {
    opacity: 1;
    -webkit-transform: translateY(0);
    transform: translateY(0);
  }
`;
const inline = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
  .d-inline{
    display: inline-block;
   }
`;

const AllRecentlySold = function () {
  const [openMenu, setOpenMenu] = React.useState(true);
  const [openMenu1, setOpenMenu1] = React.useState(false);
  const handleBtnClick = () => {
    setOpenMenu(!openMenu);
    setOpenMenu1(false);
    document.getElementById("Mainbtn").classList.add("active");
    document.getElementById("Mainbtn1").classList.remove("active");
  };
  const handleBtnClick1 = () => {
    setOpenMenu1(!openMenu1);
    setOpenMenu(false);
    document.getElementById("Mainbtn1").classList.add("active");
    document.getElementById("Mainbtn").classList.remove("active");
  };

  return (
    <div>
      <GlobalStyles />

      <section
        id="drop-banner"
        className="jumbotron breadcumb center-elements fader"
        style={{
          backgroundImage: `url(${"/img/ownPictures/carCropped.jpg"})`,
          backgroundSize: "cover",
        }}
      >
        <div id="headline-adjust">
          <Reveal
            className="onStep"
            keyframes={fadeInUp}
            delay={300}
            duration={900}
            triggerOnce
          >
            <h1 className="col-white outline">All Recently Sold CNFTs</h1>
          </Reveal>
         
          <Reveal
            className="onStep"
            keyframes={fadeInUp}
            delay={600}
            duration={900}
            triggerOnce
          >
            <p className="lead col-white outline">See all sales and prices!</p>
          </Reveal>
        </div>
      </section>

      <section className="container  no-top no-bottom">
        <div className="spacer-single"></div>
        <div className="row">
          <div className="col-lg-12">
            <div className="items_filter">
              <ul className="de_nav">
                <li>
                   <form className="row form-dark" id="form_quick_search" name="form_quick_search">
                <div className="col">
                    <input 
                        className="form-control" 
                        id="name_1" 
                        name="name_1" 
                        placeholder="search item here..." 
                        type="text"
                        onChange={filterNftTitle}
                    /> 
                    <button id="btn-submit">
                        <i className="fa fa-search bg-color-secondary"></i>
                    </button>
                    <div className="clearfix"></div>
                </div>
            </form>
                </li>
                <li id="Mainbtn" className="active">
                  <span onClick={handleBtnClick}>Price</span>
                </li>
                <li id="Mainbtn1" className="">
                  <span onClick={handleBtnClick1}>Date</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
       
            <AllRecentlySoldRedux  showLoadMore={false} />
         
      </section>

      <Footer />
    </div>
  );
};
export default AllRecentlySold;
