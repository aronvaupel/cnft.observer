import React, { memo } from 'react';
import styled from "styled-components";
import {Link} from "@reach/router"



const Outer = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
  overflow: hidden;
  border-radius: 8px;
`;

//react functional component
const AllUpcomingDropsCard = ({ nft, className = 'd-item col-lg-3 col-md-6 col-sm-6 col-xs-12 mb-4',height, onImgLoad }) => {

    return (
        <div className={className} >
            <Link to={`/cnft-details/:${nft.name}`}  style={{
           textDecoration: 'none',
           color: 'inherit'
          }}>
            <div className="nft__item m-0" id="upcomingDrops-grow">
            
                <div className="wrapperModal-info--p text-even" >
                    <h4 id="increase-font-size">{nft.name}</h4>
                   {nft.likes&& <div className=" drops-card-likes">
                        <i className="fa fa-heart margin-heart"></i><span>{nft.likes}</span>
                    </div>    }   
                </div>
                
                <div className="nft__item_wrap" style={{height: `${height}px`}} >
                <Outer >
                    <span>
                        <img onLoad={onImgLoad} src={nft.previewImg} className="lazy nft__item_preview" alt="" id="fix-picture-size"/>
                    </span>
                </Outer>
                </div>
              
             
                 
                  
                
                    <div className="wrapperModal-info date-width text-size-md">
                      <p>Selling Date: <span className='wrapperModal-info--p '> {nft.dropdate} </span></p>
                      <p>Selling Time (UTC): <span className='wrapperModal-info--p'>{nft.droptime} </span></p>
                      <p>Selling Price: <span className='wrapperModal-info--p'>{nft.mintprice} </span></p>

                    </div>
                                          
              
            </div>
            </Link>
        </div>             
    );
};

export default memo(AllUpcomingDropsCard);