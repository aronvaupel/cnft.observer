import React, { memo, useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as selectors from '../../store/selectors';
import * as actions from '../../store/actions/thunks';
import { clearNfts, clearFilter } from '../../store/actions';
import HotCollectionsCard from './HotCollectionsCard';
import { fetchAllHotCollectionsBreakdown } from '../../store/actions/thunks';
import { Link } from "@reach/router";

//react functional component
const AllHotCollectionsRedux = ({ showLoadMore = true, shuffle = false }) => {

    const dispatch = useDispatch();
     const nftItems = useSelector(selectors.allHotCollectionsBreakdownState);
    const nfts = nftItems.data ? nftItems.data : [];
    const [height, setHeight] = useState(0);

    const onImgLoad = ({target:img}) => {
        let currentHeight = height;
        if(currentHeight < img.offsetHeight) {
            setHeight(img.offsetHeight);
        }
    }
    
    useEffect(() => {
        dispatch(fetchAllHotCollectionsBreakdown());
    }, [dispatch]);

    

    const loadMore = () => {
        dispatch(actions.fetchAllHotCollectionsBreakdown());
    }

    return (
        <div className='row'>
            {nfts && nfts.map( (nft, index) => (
           
                <HotCollectionsCard nft={nft} key={index} onImgLoad={onImgLoad} clockTop={true} height={height} />
            ))}
            { showLoadMore && nfts.length <= 20 &&
                <div className='col-lg-12 no-top no-bottom'>
                    <div className="spacer-single"></div>
                    <span onClick={loadMore} className="btn-main lead m-auto">Load More</span>
                </div>
            }
        </div>              
    );
};

export default memo(AllHotCollectionsRedux);