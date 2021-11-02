import React, { memo, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Slider from "react-slick";
import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Clock from "./Clock";
import { carouselNew } from "./constants";
import * as selectors from "../../store/selectors";
import { fetchNftsBreakdown } from "../../store/actions/thunks";

const Outer = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
  height: 260px;
  overflow: hidden;
  border-radius: 8px;
`;

const CarouselNewRedux = () => {
  const dispatch = useDispatch();
  const nftsState = useSelector(selectors.nftBreakdownState);
  const nfts = nftsState.data ? nftsState.data : [];

  useEffect(() => {
    dispatch(fetchNftsBreakdown());
  }, [dispatch]);

  return (
    <div className="nft">
      <Slider {...carouselNew}>
        {nfts &&
          nfts.map((project, index) => (
            <div className="itm" index={index + 1} key={index}>
              <div className="d-item">
                <div className="project__item">
                  {project.deadline && (
                    <div className="de_countdown">
                      <Clock deadline={project.deadline} />
                    </div>
                  )}
                  <div className="col-lg-2 col-sm-4 col-6 mb30">
                    <span className="box-url">
                      <img src={project.imageSrc} alt="" className="mb20" />
                      <h4>{project.name}</h4>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
      </Slider>
    </div>
  );
};

export default memo(CarouselNewRedux);
