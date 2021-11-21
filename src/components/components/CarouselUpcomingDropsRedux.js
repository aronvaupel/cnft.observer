import React, { memo, useEffect, useState } from "react";
import { Modal, Button } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Clock from "./Clock";
import { carouselUpcomingDrops } from "./constants";
import * as selectors from "../../store/selectors";
import { fetchUpcomingDropsBreakdown } from "../../store/actions/thunks";
import { createGlobalStyle } from "styled-components";
import Discord from "../../assets/svg/ic_outline-discord";
import { Link } from "@reach/router";

const GlobalStyles = createGlobalStyle`
.btn-main{
  display: flex;
  align-items: center;
  justify-content: center; 
}
 `;

const CarouselUpcomingDropsRedux = () => {
  const dispatch = useDispatch();
  const upcomingDropsState = useSelector(selectors.upcomingDropsBreakdownState);
  const upcomingDrops = upcomingDropsState.data ? upcomingDropsState.data : [];

  const [modalId, setModalId] = React.useState("");
  const handleClose = () => setModalId("");

  useEffect(() => {
    dispatch(fetchUpcomingDropsBreakdown());
  }, [dispatch]);

  return (
    <div className="row nft upcomingDrops">
      <Slider {...carouselUpcomingDrops}>
        {upcomingDrops &&
          upcomingDrops.map((project, index) => (
            <div
              className="col-lg-2 col-sm-4 col-6 mb30"
              index={index + 1}
              key={index}
            >
              <span
                className="box-url upcomingDropsBox addShadow"
                onClick={() => setModalId(`modal${index}`)}
                id="upcomingDrops-grow"
              >
                <h4>{project.name}</h4>
                <img
                  src={project.previewImg}
                  alt="preview"
                  className="mb20 "
                  id="fix-picture-size"
                />{" "}
                {project.deadline && (
                  <div className="de_countdown ">
                    <Clock deadline={project.deadline} />
                  </div>
                )}
              </span>
              <Modal
                show={modalId === `modal${index}`}
                onHide={handleClose}
                size="md"
              >
                <Modal.Body>
                  <div className="wrapperModal-body">
                    <div className="wrapperModal-top">
                      <div className="wrapperModal-title">{project.name}</div>

                      <div className="wrapperModal-close" onClick={handleClose}>
                        Close
                      </div>
                    </div>
                    <div className="wrapperModal-center">
                      <img
                        className="wrapperModal-img"
                        src={project.previewImg}
                        alt={project.name}
                      />

                      <div className="wrapperModal-info">
                        <p>
                          Drop Date:{" "}
                          <span className="wrapperModal-info--p">
                            {" "}
                            {project.dropdate}{" "}
                          </span>
                        </p>
                        <p>
                          Drop Time (UTC):{" "}
                          <span className="wrapperModal-info--p">
                            {project.droptime}{" "}
                          </span>
                        </p>
                        <p>
                          Mint price:{" "}
                          <span className="wrapperModal-info--p">
                            {project.mintprice}{" "}
                          </span>
                        </p>
                        <p>
                          Total NFTs:{" "}
                          <span className="wrapperModal-info--p">
                            {project.nfts}{" "}
                          </span>
                        </p>
                      </div>
                    </div>
                    <div className="wrapperModal-text">
                      {project.description}
                    </div>
                  </div>
                </Modal.Body>
                <Modal.Footer>
                  <div className="wrapperModal-footer">
                    <div className="wrapperModal-links">
                      {project.twitter ? (
                        <div className="col-lg-4 col-md-6 demo-icon-wrap wrapperModal-links--box">
                          <i
                            className="fa fa-fw"
                            aria-hidden="true"
                            title="Copy to use twitter"
                          >
                            
                          </i>
                          <span className="text-grey">[&amp;#xf099;]</span>
                        </div>
                      ) : null}

                      {project.discord ? (
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

                      {project.projectURL ? (
                        <div className="col-lg-4 col-md-6 demo-icon-wrap-s2">
                          <span
                            aria-hidden="true"
                            className="icon-global"
                          ></span>{" "}
                        </div>
                      ) : null}
                    </div>
                    <Link
                      to={`/cnft-details/:${project.name}`}
                      style={{
                        textDecoration: "none",
                      }}
                    >
                       
                      <div className=" btn-main">
                        More
                      </div>
                    </Link>
                  </div>
                </Modal.Footer>
              </Modal>
            </div>
          ))}
      </Slider>
    </div>
  );
};

export default memo(CarouselUpcomingDropsRedux);
