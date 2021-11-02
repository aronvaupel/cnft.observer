import React, { memo, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Slider from "react-slick";
import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Clock from "./Clock";
import { carouselNew } from "./constants";
import * as selectors from "../../store/selectors";
import { fetchUpcomingDropsBreakdown } from "../../store/actions/thunks";
import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
.box-url{
    text-align: center;
    h4{
      font-size: 16px;
    }
  }
`;

const CarouselUpcomingDropsRedux = () => {
  const dispatch = useDispatch();
  const upcomingDropsState = useSelector(selectors.upcomingDropsBreakdownState);
  const upcomingDrops = upcomingDropsState.data ? upcomingDropsState.data : [];

  useEffect(() => {
    dispatch(fetchUpcomingDropsBreakdown());
  }, [dispatch]);

  return (
    <div className="nft">
      <Slider {...carouselNew}>
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
        {upcomingDrops &&
          upcomingDrops.map((project, index) => (
            <div className="itm" index={index + 1} key={index}>
              
                  
                  <div className="col-lg-2 col-sm-4 col-6 mb30">{project.deadline && (
                    <div className="de_countdown">
                      <Clock deadline={project.deadline} />
                    </div>
                  )}
                    <span className="box-url">
                      <img src={project.previewImg} alt="preview" className="mb20" />
                      <h4>{project.name}</h4>
                    </span>
                  </div>
               
            </div>
          ))}
           
    </section>
      </Slider>
    </div>
  );
};

export default memo(CarouselUpcomingDropsRedux);
