import React, { memo, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import * as selectors from "../../store/selectors";
import * as actions from "../../store/actions/thunks";
import NftCard from "./NftCard";
import { clearProjects, clearFilter } from "../../store/actions";
import useOnclickOutside from "react-cool-onclickoutside";
import { Link } from '@reach/router';


const NavLink = props => (
  <Link 
    {...props}
    getProps={({ isCurrent }) => {
      // the object returned here is passed to the
      // anchor element's props
      return {
        className: isCurrent ? 'active' : 'non-active',
      };
    }}
  />
);



const ColumnProjectsDetailsReduxNew = () => {

const [openMenu, setOpenMenu] = React.useState(false);
 const [openMenu1, setOpenMenu1] = React.useState(false);
  const handleBtnClick = () => {
      setOpenMenu(!openMenu);
    };
    const handleBtnClick1 = () => {
      setOpenMenu1(!openMenu1);
    };
      const closeMenu = () => {
      setOpenMenu(false);
    };
     const closeMenu1 = () => {
      setOpenMenu1(false);
    };
     const ref = useOnclickOutside(() => {
      closeMenu();
    });
    const ref1 = useOnclickOutside(() => {
      closeMenu1();
    });
     const [showmenu, btn_icon] = useState(false);

  const dispatch = useDispatch();

  const nftItems = useSelector(selectors.ProjectItems);

  const [height, setHeight] = useState(0);

  const onImgLoad = ({ target: img }) => {
    let currentHeight = height;
    if (currentHeight < img.offsetHeight) {
      setHeight(img.offsetHeight);
    }
  };

  useEffect(() => {
    dispatch(actions.fetchProjectDetailsBreakdown());
  }, [dispatch]);

  //will run when component unmounted
  useEffect(() => {
    return () => {
      dispatch(clearFilter());
      dispatch(clearProjects());
    };
  }, [dispatch]);

  const loadMore = () => {
    dispatch(actions.fetchProjectDetailsBreakdown());
  };

  return (
    <>
      <div className="row">
        <div className="col-lg-4 searchBarContainer">
       
        <div>
            <img src="/img/ownPictures/refresh.png"/>
            </div>  

        <div className="searchBarWrapper">
          <input
            type="search"
            id="site-search"
            placeholder="search item"
            aria-label="Search through site content"
            className="searchBar"
          />
          <button className="searchBar">
            <img src="/img/ownPictures/search.png" />
          </button>
        </div>

        <div className='navbar-item dropDownWrapper'>
                      <div ref={ref1}>
                        <div className="dropdown-custom dropdown-toggle btn" 
                          onClick={handleBtnClick1}
                          >
                          Explore
                        </div>
                        {openMenu1 && (
                          <div className='item-dropdown'>
                            <div className="dropdown" onClick={closeMenu1}>
                              <NavLink to="/explore" onClick={() => btn_icon(!showmenu)}>Explore</NavLink>
                              <NavLink to="/explore2" onClick={() => btn_icon(!showmenu)}>Explore 2</NavLink>
                              <NavLink to="/rangking" onClick={() => btn_icon(!showmenu)}>Rangking</NavLink>
                              <NavLink to="/colection" onClick={() => btn_icon(!showmenu)}>Collection</NavLink>
                              <NavLink to="/ItemDetail" onClick={() => btn_icon(!showmenu)}>Items Details</NavLink>
                              <NavLink to="/Auction" onClick={() => btn_icon(!showmenu)}>Live Auction</NavLink>
                              <NavLink to="/helpcenter" onClick={() => btn_icon(!showmenu)}>Help Center</NavLink>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>

        <div className="thumbnailWrapper" >
            <button><img src="/img/ownPictures/visualization4.png"/> </button>
             <button><img src="/img/ownPictures/visualization9.png"/></button>
        </div>

 </div>
      </div>

      <div className="row">
        {nftItems &&
          nftItems.map((nft, index) => (
            <NftCard
              nft={nft}
              key={index}
              onImgLoad={onImgLoad}
              height={height}
              className="d-item col-lg-4 col-md-6 col-sm-6 col-xs-12 mb-4"
            />
          ))}
        {nftItems.length <= 20 && (
          <div className="col-lg-12">
            <div className="spacer-single"></div>
            <span onClick={loadMore} className="btn-main lead m-auto">
              Load More
            </span>
          </div>
        )}
      </div>
    </>
  );
};

export default memo(ColumnProjectsDetailsReduxNew);
