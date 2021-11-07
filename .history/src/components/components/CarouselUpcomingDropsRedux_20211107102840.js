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
              <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                  <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                 <section className='container containerModal'>
    <div className='row mt-md-5 pt-md-4'>

    <div className="col-md-6 text-center">
                            <img src="./img/items/big-1.jpg" className="img-fluid img-rounded mb-sm-30" alt=""/>
                        </div>
                        <div className="col-md-6">
                            <div className="item_info">
                                Auctions ends in 
                                <div className="de_countdown">
                                  <Clock deadline="December, 30, 2021" />
                                </div>
                                <h2>Pinky Ocean</h2>
                                <div className="item_info_counts">
                                    <div className="item_info_type"><i className="fa fa-image"></i>Art</div>
                                    <div className="item_info_views"><i className="fa fa-eye"></i>250</div>
                                    <div className="item_info_like"><i className="fa fa-heart"></i>18</div>
                                </div>
                                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>

                                <h6>Creator</h6>
                                <div className="item_author">                                    
                                    <div className="author_list_pp">
                                        <span>
                                            <img className="lazy" src="./img/author/author-1.jpg" alt=""/>
                                            <i className="fa fa-check"></i>
                                        </span>
                                    </div>                                    
                                    <div className="author_list_info">
                                        <span>Monica Lucas</span>
                                    </div>
                                </div>

                                <div className="spacer-40"></div>

                                <div className="de_tab">
    
                                <ul className="de_nav">
                                    <li id='Mainbtn' className="active"><span onClick={handleBtnClick}>Bids</span></li>
                                    <li id='Mainbtn1' className=''><span onClick={handleBtnClick1}>History</span></li>
                                </ul>
                                
                                <div className="de_tab_content">
                                    {openMenu && (  
                                    <div className="tab-1 onStep fadeIn">
                                        <div className="p_list">
                                            <div className="p_list_pp">
                                                <span>
                                                    <img className="lazy" src="./img/author/author-1.jpg" alt=""/>
                                                    <i className="fa fa-check"></i>
                                                </span>
                                            </div>                                    
                                            <div className="p_list_info">
                                                Bid accepted <b>0.005 ETH</b>
                                                <span>by <b>Monica Lucas</b> at 6/15/2021, 3:20 AM</span>
                                            </div>
                                        </div>

                                        <div className="p_list">
                                            <div className="p_list_pp">
                                                <span>
                                                    <img className="lazy" src="./img/author/author-2.jpg" alt=""/>
                                                    <i className="fa fa-check"></i>
                                                </span>
                                            </div>                                    
                                            <div className="p_list_info">
                                                Bid <b>0.005 ETH</b>
                                                <span>by <b>Mamie Barnett</b> at 6/14/2021, 5:40 AM</span>
                                            </div>
                                        </div>

                                        <div className="p_list">
                                            <div className="p_list_pp">
                                                <span>
                                                    <img className="lazy" src="./img/author/author-3.jpg" alt=""/>
                                                    <i className="fa fa-check"></i>
                                                </span>
                                            </div>                                    
                                            <div className="p_list_info">
                                                Bid <b>0.004 ETH</b>
                                                <span>by <b>Nicholas Daniels</b> at 6/13/2021, 5:03 AM</span>
                                            </div>
                                        </div>

                                        <div className="p_list">
                                            <div className="p_list_pp">
                                                <span>
                                                    <img className="lazy" src="./img/author/author-4.jpg" alt=""/>
                                                    <i className="fa fa-check"></i>
                                                </span>
                                            </div>                                    
                                            <div className="p_list_info">
                                                Bid <b>0.003 ETH</b>
                                                <span>by <b>Lori Hart</b> at 6/12/2021, 12:57 AM</span>
                                            </div>
                                        </div>
                                    </div>
                                    )}

                                    {openMenu1 && ( 
                                    <div className="tab-2 onStep fadeIn">
                                        <div className="p_list">
                                            <div className="p_list_pp">
                                                <span>
                                                    <img className="lazy" src="./img/author/author-5.jpg" alt=""/>
                                                    <i className="fa fa-check"></i>
                                                </span>
                                            </div>                                    
                                            <div className="p_list_info">
                                                Bid <b>0.005 ETH</b>
                                                <span>by <b>Jimmy Wright</b> at 6/14/2021, 6:40 AM</span>
                                            </div>
                                        </div>

                                        <div className="p_list">
                                            <div className="p_list_pp">
                                                <span>
                                                    <img className="lazy" src="./img/author/author-1.jpg" alt=""/>
                                                    <i className="fa fa-check"></i>
                                                </span>
                                            </div>                                    
                                            <div className="p_list_info">
                                                Bid accepted <b>0.005 ETH</b>
                                                <span>by <b>Monica Lucas</b> at 6/15/2021, 3:20 AM</span>
                                            </div>
                                        </div>

                                        <div className="p_list">
                                            <div className="p_list_pp">
                                                <span>
                                                    <img className="lazy" src="./img/author/author-2.jpg" alt=""/>
                                                    <i className="fa fa-check"></i>
                                                </span>
                                            </div>                                    
                                            <div className="p_list_info">
                                                Bid <b>0.005 ETH</b>
                                                <span>by <b>Mamie Barnett</b> at 6/14/2021, 5:40 AM</span>
                                            </div>
                                        </div>

                                        <div className="p_list">
                                            <div className="p_list_pp">
                                                <span>
                                                    <img className="lazy" src="./img/author/author-3.jpg" alt=""/>
                                                    <i className="fa fa-check"></i>
                                                </span>
                                            </div>                                    
                                            <div className="p_list_info">
                                                Bid <b>0.004 ETH</b>
                                                <span>by <b>Nicholas Daniels</b> at 6/13/2021, 5:03 AM</span>
                                            </div>
                                        </div>

                                        <div className="p_list">
                                            <div className="p_list_pp">
                                                <span>
                                                    <img className="lazy" src="./img/author/author-4.jpg" alt=""/>
                                                    <i className="fa fa-check"></i>
                                                </span>
                                            </div>                                    
                                            <div className="p_list_info">
                                                Bid <b>0.003 ETH</b>
                                                <span>by <b>Lori Hart</b> at 6/12/2021, 12:57 AM</span>
                                            </div>
                                        </div>
                                    </div>
                                    )}
                                    
                                </div>
                                
                            </div>
                                
                            </div>
                        </div>

    </div>
  </section>
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
