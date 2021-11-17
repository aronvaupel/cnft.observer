import React, { memo } from 'react';
import styled from "styled-components";
import Clock from "./Clock";

const Outer = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
  overflow: hidden;
  border-radius: 8px;
`;

//react functional component
const AllUpcomingDropsCard = ({ nft, className = 'd-item col-lg-3 col-md-6 col-sm-6 col-xs-12 mb-4', clockTop = true, height, onImgLoad }) => {

    return (
        <div className={className}>
            <div className="nft__item m-0">
            
                { nft.deadline && clockTop &&
                    <div className="de_countdown">
                        <Clock deadline={nft.deadline} />
                    </div>
                }
                <div className="author_list_pp">
                    <span onClick={()=> window.open(nft.authorLink, "_self")}>                                    
                        <img className="lazy" src={nft.authorImg} alt=""/>
                        <i className="fa fa-check"></i>
                    </span>
                </div>
                <div className="nft__item_wrap" style={{height: `${height}px`}}>
                <Outer>
                    <span>
                        <img onLoad={onImgLoad} src={nft.previewImg} className="lazy nft__item_preview" alt=""/>
                    </span>
                </Outer>
                </div>
               
                <div className="nft__item_info">
                    <div className="wrapperModal-info">
                      <p>Drop Date: <span className='wrapperModal-info--p'> {nft.dropdate} </span></p>
                      <p>Drop Time: <span className='wrapperModal-info--p'>{nft.droptime} </span></p>
                      <p>Mint price: <span className='wrapperModal-info--p'>{nft.mintprice} </span></p>
                      <p>Total NFTs: <span className='wrapperModal-info--p'>{nft.nfts} </span></p>
                    </div>
                    <div className="nft__item_like">
                        <i className="fa fa-heart"></i><span>{nft.likes}</span>
                    </div>                            
                </div> 
            </div>
        </div>             
    );
};

export default memo(AllUpcomingDropsCard);