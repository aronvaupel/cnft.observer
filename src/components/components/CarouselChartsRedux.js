import React, { memo, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Slider from "react-slick";
import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { carouselChart } from "./constants";
import * as selectors from "../../store/selectors";
import { fetchChartsBreakdown } from "../../store/actions/thunks";
import Chart from "react-apexcharts";
import Discord from "../../assets/svg/ic_outline-discord";
import { Modal, Button } from "react-bootstrap";

const Outer = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
  padding-top: 15px;
  overflow: hidden;
  border-radius: 8px;
`;

const CarouselChartsRedux = () => {
  const dispatch = useDispatch();
  const chartsState = useSelector(selectors.chartsBreakdownState);
  const charts = chartsState.data ? chartsState.data : [];

 const [modalId, setModalId] = React.useState("");
  const handleClose = () => setModalId("");

  useEffect(() => {
    dispatch(fetchChartsBreakdown());
  }, [dispatch]);

  return (
    <div className="nft container">
      <Slider {...carouselChart}>
        {charts &&
          charts.map((chart, index) => (
            <div className="itm" index={index + 1} key={index} >
              <div className="d-item " onClick={() => setModalId(`modal${index}`)}>
                <div className="nft__item wrapperChart addShadow ">
                  <div className="nft__item_wrap wrapperChart-inner">
                    <div className="textWrapper">
                      <h4>{chart.options.title.name}</h4>
                      <Outer id="chart-grow">
                        <Chart
                        
                          type={chart.options.chart.type}
                          options={chart.options}
                          series={chart.series}
                          height="auto"
                          width="100%"
                          chartOptions={chart.chartOptions}
                        />
                      </Outer>
                   

                    </div>
                  </div>
                </div>
              </div>
                <Modal
                show={modalId === `modal${index}`}
                onHide={handleClose}
                size="lg"
                className="wrapperModal"
              >
                <Modal.Body>
                  <div className="wrapperModal-body">
                    <div className="wrapperModal-top">
                      <img
                        className="wrapperModal-img"
                        src={chart.previewImg}
                        alt={chart.options.title.name}
                      />
                      <div className="wrapperModal-top-right">
                        <div
                          className="wrapperModal-close"
                          onClick={handleClose}
                        >
                          Close
                        </div>
                        <div className="wrapperModal-title">{chart.modal.options.title.name}</div>
                      </div>
                    </div>
                      <Outer>
                        <Chart
                          type={chart.modal.options.chart.type}
                          options={chart.modal.options}
                          series={chart.modal.series}
                          height="auto"
                          width="600px"
                          chartOptions={chart.modal.chartOptions}
                        />
                      </Outer>
                  </div>
                </Modal.Body>
                <Modal.Footer>
                  <div className="wrapperModal-footer">
                    <div className="wrapperModal-links">
                      
                     {chart.twitter ? <div className="col-lg-4 col-md-6 demo-icon-wrap wrapperModal-links--box">
                        <i
                          className="fa fa-fw"
                          aria-hidden="true"
                          title="Copy to use twitter"
                        >
                          
                        </i>
                        <span className="text-grey">[&amp;#xf099;]</span>
                      </div> : null} 


                     {chart.discord? <div className="col-lg-4 col-md-6 demo-icon-wrap wrapperModal-links--box">
                        <i
                          className="fa fa-fw box-discord"
                          aria-hidden="true"
                          title="Discord-Icon"
                        >
                          <Discord />
                        </i>
                        <span className="text-grey"></span>
                      </div>
: null} 

                       {chart.projectURL?<div className="col-lg-4 col-md-6 demo-icon-wrap-s2">
                        <span aria-hidden="true" className="icon-global"></span>{" "}
                       
                      </div>
 : null}

                    </div>
                    <div className="wrapperModal-detailLink btn-main">Details</div>
                  </div>
                </Modal.Footer>
              </Modal>
            </div>
          ))}
          
      </Slider>
    </div>
  );
};

export default memo(CarouselChartsRedux);
