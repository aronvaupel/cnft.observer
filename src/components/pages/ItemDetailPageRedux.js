import React, { memo, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Clock from "../components/Clock";
import Footer from "../components/footer";
import { createGlobalStyle } from "styled-components";
import * as selectors from "../../store/selectors";
import { fetchNftDetail } from "../../store/actions/thunks";
import Checkout from "../components/Checkout";
import { Link } from "@reach/router";
import Reveal from "react-awesome-reveal";
import { keyframes } from "@emotion/react";

const GlobalStyles = createGlobalStyle`
  header#myHeader.navbar.white {
    background: #212428;
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
  const nftDetailState = useSelector(selectors.nftDetailState);
  const nft = nftDetailState.data ? nftDetailState.data : [];

  const [openCheckout, setOpenCheckout] = React.useState(false);

  useEffect(() => {
    dispatch(fetchNftDetail());
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
                
                <div className="item_info_like align-center">
                  <i className="fa fa-heart"></i>
                  {nft.item_likes}
                </div>
                <div className="item_info_views align-center">
                  <i className="fa fa-eye"></i>
                  {nft.item_views}
                </div>
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
                <button
                  className="btn-main lead mb-5"
                  onClick={() => setOpenCheckout(true)}
                >
                  Checkout
                </button>
              </Reveal>
              <div className="de_tab">
                <ul className="de_nav">
                  <li id="Mainbtn" className="active">
                    <span onClick={handleBtnClick}>Bids</span>
                  </li>
                  <li id="Mainbtn1" className="">
                    <span onClick={handleBtnClick1}>History</span>
                  </li>
                </ul>

                <div className="de_tab_content">
                  {openMenu && (
                    <div className="tab-1 onStep fadeIn">
                      {nft.bids &&
                        nft.bids.map((bid, index) => (
                          <div className="p_list" key={index}>
                            <div className="p_list_pp">
                              <span>
                                <img className="lazy" src={bid.avatar} alt="" />
                                <i className="fa fa-check"></i>
                              </span>
                            </div>
                            <div className="p_list_info">
                              Bid {bid.is_author && "accepted"}{" "}
                              <b>{bid.value} ETH</b>
                              <span>
                                by <b>{bid.username}</b> at {bid.timestamp}
                              </span>
                            </div>
                          </div>
                        ))}
                    </div>
                  )}

                  {openMenu1 && (
                    <div className="tab-2 onStep fadeIn">
                      {nft.history &&
                        nft.history.map((bid, index) => (
                          <div className="p_list" key={index}>
                            <div className="p_list_pp">
                              <span>
                                <img className="lazy" src={bid.avatar} alt="" />
                                <i className="fa fa-check"></i>
                              </span>
                            </div>
                            <div className="p_list_info">
                              Bid {bid.is_author && "accepted"}{" "}
                              <b>{bid.value} ETH</b>
                              <span>
                                by <b>{bid.username}</b> at {bid.timestamp}
                              </span>
                            </div>
                          </div>
                        ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
      {openCheckout && (
        <div className="checkout">
          <Checkout />
          <button className="btn-close" onClick={() => setOpenCheckout(false)}>
            x
          </button>
        </div>
      )}
    </div>
  );
};

export default memo(ItemDetailPageRedux);
