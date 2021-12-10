import React, { useState } from "react";
import ColumnProjectsDetailsReduxNew from "../components/ColumnProjectsDetailsReduxNew";
import { createGlobalStyle } from "styled-components";
import CheckboxProjectsDetails from "../components/CheckboxProjectsDetails";
import Sticky from "react-sticky-el";
import { Parallax } from "react-scroll-parallax";
import { useMediaQuery } from "react-responsive";

const GlobalStyles = createGlobalStyle`
  .navbar {
    border-bottom: solid 1px rgba(255, 255, 255, .1) !important;
  }
  header#myHeader.navbar.white {
    background: #212428;
  }
`;

const ProjectsDetails = ({ onCLick }) => {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  const isTablet = useMediaQuery({ query: "(max-width:12000px)" });
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
                <div>
                  <Parallax y={[-10, 10]}>
                    <img
                      src="/img/author/author-1.jpg"
                      alt=""
                      className="d_profile_img profileBorder"
                    />
                  </Parallax>
                </div>

                <div className="profile_name">
                  <h4>Abstraction</h4>
                </div>

                {!isMobile ? (
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
                ) : null}
                <div>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam erat, sed diam voluptua. At vero eos et accusam et
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <>
        {showMenu ? (
          <section className="wideWithMargin">
            <div className="row">
              <div className="col-md-3">
                {!isMobile ? (
                  <Sticky topOffset={85}>
                    <CheckboxProjectsDetails
                      showMenu={showMenu}
                      setShowMenu={setShowMenu}
                      onClick={openMenu}
                    />
                  </Sticky>
                ) : (
                  <div className="col-md-3">
                    <CheckboxProjectsDetails
                      showMenu={showMenu}
                      setShowMenu={setShowMenu}
                      onClick={openMenu}
                    />
                  </div>
                )}
              </div>
              <div className="col-md-9">
                {!isTablet ? (
                  <div className="spacerForStickyFilters"></div>
                ) : null}

                <ColumnProjectsDetailsReduxNew />
              </div>
            </div>
          </section>
        ) : (
          <section className="wideWithMargin">
            <div className="row">
              <div className="col-md-3">
                <Sticky topOffset={85}>
                  <>
                    {!isTablet ? (
                      <div className="spacerForStickyFilters"></div>
                    ) : null}
                    <div className="filterbox item_filter_group filterboxHidden">
                      <img
                        src="/img/ownPictures/arrow-right.png"
                        alt="Show filters"
                        onClick={openMenu}
                      />
                    </div>
                  </>
                </Sticky>
              </div>
              <div className="col-md-9">
                <div className="spacerForStickyFilters"></div>
                <ColumnProjectsDetailsReduxNew />
              </div>
            </div>
          </section>
        )}
      </>

      
    </div>
  );
};

export default ProjectsDetails;
