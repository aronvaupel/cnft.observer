import React, { memo, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Slider from "react-slick";
import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { carouselNew } from "./constants";
import * as selectors from "../../store/selectors";
import { fetchChartsBreakdown } from "../../store/actions/thunks";
import Chart from "react-apexcharts";

const Outer = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
  height: 260px;
  overflow: hidden;
  border-radius: 8px;
`;

const CarouselChartsRedux = () => {
  const dispatch = useDispatch();
  const chartsState = useSelector(selectors.chartsBreakdownState);
  const charts = chartsState.data ? chartsState.data : [];

  useEffect(() => {
    dispatch(fetchChartsBreakdown());
  }, [dispatch]);

  return (
    <div className="nft">
      <Slider {...carouselNew}>
        {charts &&
          charts.map((chart, index) => (
            <div className="itm" index={index + 1} key={index}>
              <div className="d-item">
                <div className="nft__item">
                  <div className="chart__item_wrap">
                    <Outer>
                      <Chart
                      type={chart.type}
                        options={chart.options}
                        series={chart.series}
                        xaxis={chart.xaxis}
                        plotOptions={chart.plotOptions}
                        fill={chart.fill}
                        dataLabels={chart.dataLabels}
                        title={chart.title}
                        height="auto"
                        width="100%"
                  
                      />
                    </Outer>
                  </div>
                  <div className="textWrapper">
                    <h4>Top Charts</h4>
                    <span
                      onClick={() => window.open("#", "_self")}
                      className="btn-main inline lead"
                      id="chart-span"
                    >
                      more...
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

export default memo(CarouselChartsRedux);
