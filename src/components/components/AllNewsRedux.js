import React, { memo, useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as selectors from '../../store/selectors';
import * as actions from '../../store/actions/thunks';
import { clearNfts, clearFilter } from '../../store/actions';
import News from './News';
import { fetchNewsBreakdown } from '../../store/actions/thunks';

//react functional component
const AllNewsRedux = () => {

    const dispatch = useDispatch();
     const nftItems = useSelector(selectors.newsBreakdownState);
    const nfts = nftItems.data ? nftItems.data : [];
    const [height, setHeight] = useState(0);

    const onImgLoad = ({target:img}) => {
        let currentHeight = height;
        if(currentHeight < img.offsetHeight) {
            setHeight(img.offsetHeight);
        }
    }
    
    useEffect(() => {
        dispatch(fetchNewsBreakdown());
    }, [dispatch]);



    return (
        <div className='row'>
            {nfts && nfts.map( (nft, index) => (
                <News nft={nft} key={index} onImgLoad={onImgLoad} clockTop={true} height={height} />
            ))}
           
        </div>              
    );
};

export default memo(AllNewsRedux);