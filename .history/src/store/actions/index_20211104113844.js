import { 
    createAction as action, 
    createAsyncAction as asyncAction 
} from 'typesafe-actions';

export const getNftBreakdown = asyncAction(
    'nft/GET_NFT_BREAKDOWN',
    'nft/GET_NFT_BREAKDOWN_SUCCESS',
    'nft/GET_NFT_BREAKDOWN_FAIL'
)();

export const getNftShowcase = asyncAction(
    'nft/GET_CHARTS_SHOWCASE',
    'nft/GET_NFT_SHOWCASE_SUCCESS',
    'nft/GET_NFT_SHOWCASE_FAIL'
)();

export const getNftDetail = asyncAction(
    'nft/GET_NFT_DETAIL',
    'nft/GET_NFT_DETAIL_SUCCESS',
    'nft/GET_NFT_DETAIL_FAIL'
)();

export const getUpcomingDropsBreakdown = asyncAction(
    'nft/GET_UPCOMINGDROPS_BREAKDOWN',
    'nft/GET_UPCOMINGDROPS_BREAKDOWN_SUCCESS',
    'nft/GET_UPCOMINGDROPS_BREAKDOWN_FAIL'
)();

export const getUpcomingDropsShowcase = asyncAction(
    'nft/GET_UPCOMINGDROPS_SHOWCASE',
    'nft/GET_UPCOMINGDROPS_SHOWCASE_SUCCESS',
    'nft/GET_UPCOMINGDROPS_SHOWCASE_FAIL'
)();

export const getUpcomingDropsDetail = asyncAction(
    'nft/GET_UPCOMINGDROPS_DETAIL',
    'nft/GET_UPCOMINGDROPS_DETAIL_SUCCESS',
    'nft/GET_UPCOMINGDROPS_DETAIL_FAIL'
)();

export const getHotCollections = asyncAction(
    'nft/GET_HOT_COLLECTIONS',
    'nft/GET_HOT_COLLECTIONS_SUCCESS',
    'nft/GET_HOT_COLLECTIONS_FAIL'
)();

export const getAuthorList = asyncAction(
    'nft/GET_AUTHOR_LIST',
    'nft/GET_AUTHOR_LIST_SUCCESS',
    'nft/GET_AUTHOR_LIST_FAIL'
)();

export const getAuthorRanking = asyncAction(
    'nft/GET_AUTHOR_RANKING',
    'nft/GET_AUTHOR_RANKING_SUCCESS',
    'nft/GET_AUTHOR_RANKING_FAIL'
)();

export const getTopProjectsList = asyncAction(
    'nft/GET_TOP_PROJECTS_LIST',
    'nft/GET_TOP_PROJECTS_LIST_SUCCESS',
    'nft/GET_TOP_PROJECTS_LIST_FAIL'
)();

export const getProjectsRanking = asyncAction(
    'nft/GET_PROJECT_RANKING',
    'nft/GET_PROJECT_RANKING_SUCCESS',
    'nft/GET_PROJECT_RANKING_FAIL'
)();

export const getChartsRanking = asyncAction(
    'nft/GET_CHARTS_RANKING',
    'nft/GET_CHARTS_RANKING_SUCCESS',
    'nft/GET_CHARTS_RANKING_FAIL'
)();

export const getChartsBreakdown = asyncAction(
    'nft/GET_CHARTS_BREAKDOWN',
    'nft/GET_CHARTS_BREAKDOWN_SUCCESS',
    'nft/GET_CHARTS_BREAKDOWN_FAIL'
)();

export const getChartsDetail = asyncAction(
    'nft/GET_CHARTS_DETAIL',
    'nft/GET_CHARTS_DETAIL_SUCCESS',
    'nft/GET_CHARTS_DETAIL_FAIL'
)();



export const clearNfts = action('nft/CLEAR_ALL_NFTS')();
export const clearFilter = action('nft/CLEAR_FILTER')();
export const filterCategories = action('nft/FILTER_CATEGORIES')();
export const filterStatus = action('nft/FILTER_STATUS')();
export const filterItemsType = action('nft/FILTER_ITEMS_TYPE')();
export const filterCollections = action('nft/FILTER_COLLECTIONS')();
export const filterNftTitle = action('nft/FILTER_NFT_TITLE')();