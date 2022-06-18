import React, { memo, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Clock from "../components/Clock";
import Footer from "../components/footer";
import { createGlobalStyle } from "styled-components";
import * as selectors from "../../store/selectors";
import { fetchNftsDetailsDetail } from "../../store/actions/thunks";
import { Link } from "@reach/router";
import Reveal from "react-awesome-reveal";
import { keyframes } from "@emotion/react";
import Discord from "../../assets/svg/ic_outline-discord";

const GlobalStyles = createGlobalStyle`
  header#myHeader.navbar.white {
    background: #212428;
  }
  .btn-main{
    background: #8364e2;
   
  }
  .btn-main:hover{
    box-shadow: 2px 2px 20px 0px rgb(131, 100, 226, 1)
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
const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const ItemDetailPageRedux = () => {
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

  const dispatch = useDispatch();
  const nftsDetailsState = useSelector(selectors.nftDetailState);
  const nft = nftsDetailsState.data ? nftsDetailsState.data : [];

  const [openCheckout, setOpenCheckout] = React.useState(false);

  useEffect(() => {
    dispatch(fetchNftsDetailsDetail());
  }, [dispatch]);

  return (
    <div>
      <GlobalStyles />
      <section className="container">
        <div className="row mt-md-5 pt-md-4">
          <div className="col-md-6 text-center">
            <Reveal
              className="onStep"
              keyframes={fadeIn}
              delay={500}
              duration={4000}
              triggerOnce
            >
              {nft.item_preview && (
                <img
                  src={nft.item_preview}
                  className="img-fluid img-rounded mb-sm-30"
                  alt="CNFT"
                />
              )}
            </Reveal>
          </div>
          <div className="col-md-6">
            <div className="item_info">
              <div className="inline">
                {nft.item_deadline && (
                  <div className="de_countdown " id="clock-fix">
                    <Clock deadline={nft.item_deadline} />
                  </div>
                )}
                <div className="itemDetails-likes">
                <div className="item_info_like align-center">
                  <i className="fa fa-heart"></i>
                  {nft.item_likes}
                </div>
                <div className="item_info_views align-center">
                  <i className="fa fa-eye"></i>
                  {nft.item_views}
                </div></div>
              </div>
              <div className="spacer-single "></div>{" "}
              <Reveal
                className="onStep"
                keyframes={fadeInUp}
                delay={600}
                duration={900}
                triggerOnce
              >
                <h2>{nft.item_title}</h2>

                <p>{nft.item_description}</p>
                {/* button untuk checkout */}
                
              </Reveal>
              <div className="wrapperModal-footer">
                    <div className="wrapperModal-links">
                      {nft.twitter ? (
                        <div className="col-lg-4 col-md-6 demo-icon-wrap wrapperModal-links--box">
                          <i
                            className="fa fa-fw"
                            aria-hidden="true"
                            title="Twitter-Icon"
                          >
                            
                          </i>
                          <span className="text-grey">[&amp;#xf099;]</span>
                        </div>
                      ) : null}

                      {nft.discord ? (
                        <div className="col-lg-4 col-md-6 demo-icon-wrap wrapperModal-links--box">
                          <i
                            className="fa fa-fw box-discord"
                            aria-hidden="true"
                            title="Discord-Icon"
                          >
                            <Discord />
                          </i>
                          <span className="text-grey"></span>
                        </div>
                      ) : null}

                      {nft.projectURL ? (
                        <div className="col-lg-4 col-md-6 demo-icon-wrap-s2">
                          <span
                            aria-hidden="true"
                            className="icon-global"
                          ></span>{" "}
                        </div>
                      ) : null}
                      
                    </div>
                    <Link
                      to={`/articles/safety`}
                      style={{
                        textDecoration: "none",
                      }}
                    >
                       
                      <div className="wrapperModal-detailLink btn-main">
                        Safety Advice
                      </div>
                    </Link>
                  </div>
            </div>
          <div className="wrapperModal-info">
                        <p>
                          Drop Date:{" "}
                          <span className="wrapperModal-info--p">
                            {" "}
                            {nft.dropdate}{" "}
                          </span>
                        </p>
                        <p>
                          Drop Time (UTC):{" "}
                          <span className="wrapperModal-info--p">
                            {nft.droptime}{" "}
                          </span>
                        </p>
                        <p>
                          Mint price:{" "}
                          <span className="wrapperModal-info--p">
                            {nft.mintprice}{" "}
                          </span>
                        </p>
                        <p>
                          Total NFTs:{" "}
                          <span className="wrapperModal-info--p">
                            {nft.nfts}{" "}
                          </span>
                        </p>
                      </div>
          </div>
        </div>
        
      </section>
      <Footer />
     
    </div>
  );
};

export default memo(ItemDetailPageRedux);
