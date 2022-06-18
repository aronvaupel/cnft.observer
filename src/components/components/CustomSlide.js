import React, { memo } from "react";

const CustomSlide = ({ index, avatar, banner, username, uniqueId }) => {
  return (
    <div className='itm' index={index}>
      <div className="nft_coll addShadow border-top-color-fix bg-lightgrey" id="border-top-color-fix border-top-responsive">
          <div className="nft_wrap addPadding">
              <span ><img src={banner} className="lazy img-fluid addBorderRadius addShadow" alt=""/></span>
          </div>
         
          <div className="nft_coll_pp ">
              <span onClick={()=> window.open("/home", "_self") } ><img className="lazy" src={avatar} alt=""/></span>
              <i className="fa fa-check"></i>
          </div>
          <div className="nft_coll_info">
              <span onClick={()=> window.open("/home", "_self")}><h4>{ username }</h4></span>
              <span>{ uniqueId }</span>
          </div>
      </div>
    </div>
  )
}

export default memo(CustomSlide);