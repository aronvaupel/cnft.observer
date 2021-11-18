import React, { memo, useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as selectors from '../../store/selectors';
import * as actions from '../../store/actions/thunks';
import { clearNfts, clearFilter } from '../../store/actions';
import AllUpcomingDropsCard from './AllUpcomingDropsCard';
import { shuffleArray } from '../../store/utils';
import { fetchUpcomingDropsBreakdown } from '../../store/actions/thunks';

//react functional component
const AllUpcomingDropsRedux = ({ showLoadMore = true, shuffle = false }) => {

    const dispatch = useDispatch();
     const nftItems = useSelector(selectors.upcomingDropsBreakdownState);
    const nfts = nftItems.data ? nftItems.data : [];
    const [height, setHeight] = useState(0);

    const onImgLoad = ({target:img}) => {
        let currentHeight = height;
        if(currentHeight < img.offsetHeight) {
            setHeight(img.offsetHeight);
        }
    }
    
    useEffect(() => {
        dispatch(fetchUpcomingDropsBreakdown());
    }, [dispatch]);

    

    const loadMore = () => {
        dispatch(actions.fetchUpcomingDropsBreakdown());
    }

    return (
        <div className='row'>
            {nfts && nfts.map( (nft, index) => (
                <AllUpcomingDropsCard nft={nft} key={index} onImgLoad={onImgLoad} clockTop={true} height={height} />
            ))}
            { showLoadMore && nfts.length <= 20 &&
                <div className='col-lg-12'>
                    <div className="spacer-single"></div>
                    <span onClick={loadMore} className="btn-main lead m-auto">Load More</span>
                </div>
            }
        </div>              
    );
};

export default memo(AllUpcomingDropsRedux);