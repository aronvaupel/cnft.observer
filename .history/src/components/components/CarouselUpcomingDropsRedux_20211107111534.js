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

const CarouselUpcomingDropsRedux = () => {
  const dispatch = useDispatch();
  const upcomingDropsState = useSelector(selectors.upcomingDropsBreakdownState);
  const upcomingDrops = upcomingDropsState.data ? upcomingDropsState.data : [];

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    dispatch(fetchUpcomingDropsBreakdown());
  }, [dispatch]);

  return (
    <div className="row nft">
      <Slider {...carouselUpcomingDrops}>
        {upcomingDrops &&
          upcomingDrops.map((project, index) => (
            <div
              className="col-lg-2 col-sm-4 col-6 mb30 "
              index={index + 1}
              key={index}
            >
              <span className="box-url upcomingDropsBox" onClick={handleShow}>
                <img src={project.previewImg} alt="preview" className="mb20 " />
                <h4>{project.name}</h4>{" "}
                {project.deadline && (
                  <div className="de_countdown ">
                    <Clock deadline={project.deadline} />
                  </div>
                )}
              </span>
              <Modal show={show} onHide={handleClose} size="lg">
                <Modal.Header closeButton>
                  <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <div className="wrapperModal">
                    <div className="wrapperModal-top">
                      <div className="wrapperModal-top-right">
                        <div className="wrapper-close">CLose</div>
                        <div className="wrapperModal-title">{project.name}</div>
                        <div className="wrapperModal-links">
                          <div className="col-lg-4 col-md-6 demo-icon-wrap">
                            <i
                              className="fa fa-fw"
                              aria-hidden="true"
                              title="Copy to use twitter"
                            >
                              
                            </i>
                            fa-twitter
                            <span className="text-grey">[&amp;#xf099;]</span>
                          </div>
                          <div className="col-lg-4 col-md-6 demo-icon-wrap">
                            <i
                              className="fa fa-fw"
                              aria-hidden="true"
                              title="Copy to use twitter"
                            >
                              
                            </i>
                            fa-twitter
                            <span className="text-grey">[&amp;#xf099;]</span>
                          </div>
                          <div className="col-lg-4 col-md-6 demo-icon-wrap">
                            <i
                              className="fa fa-fw"
                              aria-hidden="true"
                              title="Copy to use twitter"
                            >
                              
                            </i>
                            <span className="text-grey">[&amp;#xf099;]</span>
                          </div>
                        </div>
                        <div className="wrapperModal-info"></div>
                        <div className="wrapperModal-text"></div>
                        <div className="wrapperModal-detailLink"></div>
                      </div>
                    </div>
                  </div>
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={handleClose}>
                    Close
                  </Button>
                  <Button variant="primary" onClick={handleClose}>
                    Save Changes
                  </Button>
                </Modal.Footer>
              </Modal>
            </div>
          ))}
      </Slider>
    </div>
  );
};

export default memo(CarouselUpcomingDropsRedux);
