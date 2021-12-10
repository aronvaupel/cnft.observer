import React, { memo, useCallback, useState } from "react";
import { useDispatch } from "react-redux";
import {
  categories,
  status,
  itemsType,
  collections,
} from "./constants/filters";
import {
  filterProjectCategories,
  filterProjectStatus,
  filterProjectItemsType,
  filterProjectCollections,
} from "../../store/actions";
import { filterCategories, filterStatus, filterItemsType, filterNftTitle } from '../../store/actions';
import { useMediaQuery } from "react-responsive";


const CheckboxProjectDetails = ({onClick }) => {
  const isTablet = useMediaQuery({ query: "(max-width:1200px)" });
  const dispatch = useDispatch();

  const handleCategory = useCallback(
    (event) => {
      const { id } = event.target;
      dispatch(filterProjectCategories({ value: id, singleSelect: false }));
    },
    [dispatch]
  );

  const handleStatus = useCallback(
    (event) => {
      const { id } = event.target;
      dispatch(filterProjectStatus({ value: id, singleSelect: false }));
    },
    [dispatch]
  );

  const handleItemsType = useCallback(
    (event) => {
      const { id } = event.target;
      dispatch(filterProjectItemsType({ value: id, singleSelect: false }));
    },
    [dispatch]
  );

  const handleCollections = useCallback(
    (event) => {
      const { id } = event.target;
      dispatch(filterProjectCollections({ value: id, singleSelect: false }));
    },
    [dispatch]
  );

  return (
    <>
     
         {!isTablet? ( <div className="spacerForStickyFilters"></div>):null}

          <div className="filterbox item_filter_group">
            <div>Filters</div>
            <img
              src="/img/ownPictures/arrow-left.png"
              alt="Hide filters"
              onClick={onClick}
            />
          </div>

 <div className="filtergroup item_filter_group">
            <form>
              <fieldset>
                <div>
                  <input
                    type="radio"
                    id="recently"
                    name="select"
                    value="items"
                    
  
                  />
                  <label htmlFor="recently" className="radio">
                    Items
                  </label>
                </div>
                <div>
                  <input
                    type="radio"
                    id="low"
                    name="select"
                    value="activity"
                   
                  />
                  <label htmlFor="low" className="radio">
                    {" "}
                    Activity
                  </label>
                </div>
              
              </fieldset>
            </form>
          </div>


          <div className="filtergroup item_filter_group">
            <form>
              <fieldset>
                <div>
                  <input
                    type="radio"
                    id="recently"
                    name="sort"
                    value="recently"
                    
  
                  />
                  <label htmlFor="recently" className="radio">
                    Recently listed
                  </label>
                </div>
                <div>
                  <input
                    type="radio"
                    id="low"
                    name="sort"
                    value="low"
                   
                  />
                  <label htmlFor="low" className="radio">
                    {" "}
                    Price: low to high
                  </label>
                </div>
                <div>
                  <input
                    type="radio"
                    id="high"
                    name="sort"
                    value="high"
                    
                  />
                  <label htmlFor="high" className="radio">
                    Price: high to low
                  </label>
                </div>
              </fieldset>
            </form>
          </div>

          <div className="item_filter_group">
            <h4>Select Categories</h4>
            <div className="de_form">
              {categories.map((item, index) => (
                <div className="de_checkbox" key={index}>
                  <input
                    id={item.value}
                    name={item.value}
                    type="checkbox"
                    value={item.value}
                    onChange={handleCategory}
                  />
                  <label htmlFor={item.value}>{item.label}</label>
                </div>
              ))}
            </div>
          </div>
          <div className="item_filter_group">
            <h4>Status</h4>
            <div className="de_form">
              {status.map((item, index) => (
                <div className="de_checkbox" key={index}>
                  <input
                    id={item.value}
                    name={item.value}
                    type="checkbox"
                    value={item.value}
                    onChange={handleStatus}
                  />
                  <label htmlFor={item.value}>{item.label}</label>
                </div>
              ))}
            </div>
          </div>
          <div className="item_filter_group">
            <h4>Items Type</h4>
            <div className="de_form">
              {itemsType.map((item, index) => (
                <div className="de_checkbox" key={index}>
                  <input
                    id={item.value}
                    name={item.value}
                    type="checkbox"
                    value={item.value}
                    onChange={handleItemsType}
                  />
                  <label htmlFor={item.value}>{item.label}</label>
                </div>
              ))}
            </div>
          </div>
          <div className="item_filter_group">
            <h4>Collections</h4>
            <div className="de_form">
              {collections.map((item, index) => (
                <div className="de_checkbox" key={index}>
                  <input
                    id={item.value}
                    name={item.value}
                    type="checkbox"
                    value={item.value}
                    onChange={handleCollections}
                  />
                  <label htmlFor={item.value}>{item.label}</label>
                </div>
              ))}
            </div>
          </div>
        </>
      ) 
};

export default memo(CheckboxProjectDetails);
