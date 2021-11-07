import React, { memo, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Slider from "react-slick";
import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Clock from "./Clock";
import { carouselUpcomingDrops } from "./constants";
import * as selectors from "../../store/selectors";
import { fetchUpcomingDropsBreakdown } from "../../store/actions/thunks";
import { createGlobalStyle } from "styled-components";
import {Modal, Button} from 'react-bootstrap';
import ModalStandard from "./ModalStandard";


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
              <ModalStandard onClick={handleClose}/>
            </div>
          ))}
      </Slider>
    </div>
  );
};

export default memo(CarouselUpcomingDropsRedux);
