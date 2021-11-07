import React, { memo, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import Slider from "react-slick";
import styled from "styled-components";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Clock from "./Clock";
import { carouselNew } from './constants';
import * as selectors from '../../store/selectors';
import { fetchChartsBreakdown } from "../../store/actions/thunks";
import Chart from './chart'

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
        <div className='nft'>
          <Slider {...carouselNew}>
          {charts && charts.map( (chart, index) => (
            <div className='itm' index={index + 1} key={index}>
              <div className="d-item">
                <div className="chart__item">
                    <div className="chart__item_wrap">
                      <Outer>
                        <span>
                            <Chart/>
                        </span>
                      </Outer>
                    </div>
                    <div className="nft__item_info">
                        <span onClick={()=> window.open("/#", "_self")}>
                            <h4>{chart.series.name}</h4>
                        </span>
                        <div className="nft__item_action">
                            <span onClick={()=> window.open(chart.bidLink, "_self")}>more</span>
                        </div>
                                                                               
                    </div> 
                </div>
              </div>
            </div>
          ))}
          </Slider>
        </div>
    );
}

export default memo(CarouselChartsRedux);
