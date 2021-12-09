import React, {useState} from "react";
import ColumnCollectionDetailsRedux from "../components/ColumnCollectionDetailsRedux";
import Footer from "../components/footer";
import { createGlobalStyle } from "styled-components";
import CheckboxCollectionDetails from "../components/CheckboxCollectionDetails";
import Sticky from "react-sticky-el";
import { Parallax } from "react-scroll-parallax";

const GlobalStyles = createGlobalStyle`
  .navbar {
    border-bottom: solid 1px rgba(255, 255, 255, .1) !important;
  }
   header#myHeader.navbar.white {
    background: #212428;
  }
`;

const CollectionDetails = () => {
  const [showMenu, setShowMenu] = useState(true);

  const openMenu = () => {
    setShowMenu((menu) => !menu);
  };
  return (
    <div>
      <GlobalStyles />
      <Parallax y={[-30, 30]}>
        <section
          id="profile_banner"
          className="container pictureStyling "
          style={{ backgroundImage: `url(${"/img/background/4.jpg"})` }}
        >
          <div className="mainbreadcumb"></div>
        </section>
      </Parallax>
      <section className="container d_coll no-top no-bottom">
        <div className="row">
          <div className="col-md-12">
            <div className="d_profile">
              <div className="profile_avatar">
                <div className="d_profile_img">
                  <Parallax y={[-10, 10]}>
                    <img src="/img/author/author-1.jpg" alt="" className="d_profile_img profileBorder" />
                  </Parallax>
                </div>

                <div className="profile_name">
                  <h4>Abstraction</h4>
                </div>

                <div className="infoboxWrapper">
                  <div className="infobox">
                    <div className="indicatorHeader">FLOOR PRICE</div>
                    <div className="indicatorCounter">2.20 SOL</div>
                  </div>
                  <div className="infobox">
                    <div className="indicatorHeader">
                      TOTAL VOLUME (ALL TIME, ALL MARKETPLACES)
                    </div>
                    <div className="indicatorCounter">7781.39 SOL</div>
                  </div>
                  <div className="infobox">
                    <div className="indicatorHeader">
                      AVG SALE PRICE (LAST 24HR)
                    </div>
                    <div className="indicatorCounter"> 1.99 SOL</div>
                  </div>
                  <div className="infobox">
                    <div className="indicatorHeader"> LISTED COUNT</div>
                    <div className="indicatorCounter">188</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="wideWithMargin">
        <div className="row">
          <div className="col-md-3">
            <Sticky topOffset={85} >
              <CheckboxCollectionDetails
                showMenu={showMenu}
                setShowMenu={setShowMenu}
                onClick={openMenu}
              />
            </Sticky>
          </div>
          <div className="col-md-9">
             <div className="spacerForStickyFilters"></div>
            <ColumnCollectionDetailsRedux />
          </div>
        </div>
      </section>

     
    </div>
  );
};
export default CollectionDetails;
