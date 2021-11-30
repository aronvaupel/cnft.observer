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
    'nft/GET_NFT_SHOWCASE',
    'nft/GET_NFT_SHOWCASE_SUCCESS',
    'nft/GET_NFT_SHOWCASE_FAIL'
)();

export const getNftDetail = asyncAction(
    'nft/GET_NFT_DETAIL',
    'nft/GET_NFT_DETAIL_SUCCESS',
    'nft/GET_NFT_DETAIL_FAIL'
)();

export const getNftsDetailsBreakdown = asyncAction(
    'nft/GET_NFT_BREAKDOWN',
    'nft/GET_NFT_BREAKDOWN_SUCCESS',
    'nft/GET_NFT_BREAKDOWN_FAIL'
)();

export const getNftsDetailsShowcase = asyncAction(
    'nft/GET_NFT_SHOWCASE',
    'nft/GET_NFT_SHOWCASE_SUCCESS',
    'nft/GET_NFT_SHOWCASE_FAIL'
)();

export const getNftsDetailsDetail = asyncAction(
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

export const getTopProjectsRanking = asyncAction(
    'nft/GET_TOP_PROJECT_RANKING',
    'nft/GET_TOP_PROJECT_RANKING_SUCCESS',
    'nft/GET_TOP_PROJECT_RANKING_FAIL'
)();

export const getChartsRanking = asyncAction(
    'nft/GET_CHARTS_RANKING',
    'nft/GET_CHARTS_RANKING_SUCCESS',
    'nft/GET_CHARTS_RANKING_FAIL'
)();

export const getChartsShowcase = asyncAction(
    'nft/GET_CHARTS_SHOWCASE',
    'nft/GET_CHARTS_SHOWCASE_SUCCESS',
    'nft/GET_CHARTS_SHOWCASE_FAIL'
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

export const getArticlesShowcase = asyncAction(
    'nft/GET_ARTICLE_SHOWCASE',
    'nft/GET_ARTICLE_SHOWCASE_SUCCESS',
    'nft/GET_ARTICLE_SHOWCASE_FAIL'
)();

export const getArticlesBreakdown = asyncAction(
    'nft/GET_ARTICLE_BREAKDOWN',
    'nft/GET_ARTICLE_BREAKDOWN_SUCCESS',
    'nft/GET_ARTICLE_BREAKDOWN_FAIL'
)();

export const getArticlesDetail = asyncAction(
    'nft/GET_ARTICLE_DETAIL',
    'nft/GET_ARTICLE_DETAIL_SUCCESS',
    'nft/GET_ARTICLE_DETAIL_FAIL'
)();

export const getNewsShowcase = asyncAction(
    'nft/GET_NEWS_SHOWCASE',
    'nft/GET_NEWS_SHOWCASE_SUCCESS',
    'nft/GET_NEWS_SHOWCASE_FAIL'
)();

export const getNewsBreakdown = asyncAction(
    'nft/GET_NEWS_BREAKDOWN',
    'nft/GET_NEWS_BREAKDOWN_SUCCESS',
    'nft/GET_NEWS_BREAKDOWN_FAIL'
)();

export const getNewsDetail = asyncAction(
    'nft/GET_NEWS_DETAIL',
    'nft/GET_NEWS_DETAIL_SUCCESS',
    'nft/GET_NEWS_DETAIL_FAIL'
)();

export const getNftsSalesShowcase = asyncAction(
    'nft/GET_SALES_SHOWCASE',
    'nft/GET_SALES_SHOWCASE_SUCCESS',
    'nft/GET_SALES_SHOWCASE_FAIL'
)();

export const getNftsSalesBreakdown = asyncAction(
    'nft/GET_SALES_BREAKDOWN',
    'nft/GET_SALES_BREAKDOWN_SUCCESS',
    'nft/GET_SALES_BREAKDOWN_FAIL'
)();

export const getNftsSalesDetail = asyncAction(
    'nft/GET_SALES_DETAIL',
    'nft/GET_SALES_DETAIL_SUCCESS',
    'nft/GET_SALES_DETAIL_FAIL'
)();

export const getAllHotCollectionsShowcase = asyncAction(
    'nft/GET_ALLHOTCOLLECTIONS_SHOWCASE',
    'nft/GET_ALLHOTCOLLECTIONS_SHOWCASE_SUCCESS',
    'nft/GET_ALLHOTCOLLECTIONS_SHOWCASE_FAIL'
)();

export const getAllHotCollectionsBreakdown = asyncAction(
    'nft/GET_ALLHOTCOLLECTIONS_BREAKDOWN',
    'nft/GET_ALLHOTCOLLECTIONS_BREAKDOWN_SUCCESS',
    'nft/GET_ALLHOTCOLLECTIONS_BREAKDOWN_FAIL'
)();

export const getAllHotCollectionsDetail = asyncAction(
    'nft/GET_ALLHOTCOLLECTIONS_DETAIL',
    'nft/GET_ALLHOTCOLLECTIONS_DETAIL_SUCCESS',
    'nft/GET_ALLHOTCOLLECTIONS_DETAIL_FAIL'
)();

export const getAllProjects = asyncAction(
    'nft/GET_ALLPROJECTS',
    'nft/GET_ALLPROJECTS_SUCCESS',
    'nft/GET_ALLPROJECTS_FAIL'
)();

export const getAllProjectsRanking = asyncAction(
    'nft/GET_ALLPROJECTS_RANKING',
    'nft/GET_ALLPROJECTS_RANKING_SUCCESS',
    'nft/GET_ALLPROJECTS_RANKING_FAIL'
)();

export const getAllProjectsDetail = asyncAction(
    'nft/GET_ALLALLPROJECTS_DETAIL',
    'nft/GET_ALLALLPROJECTS_DETAIL_SUCCESS',
    'nft/GET_ALLALLPROJECTS_DETAIL_FAIL'
)();



export const clearNfts = action('nft/CLEAR_ALL_NFTS')();
export const clearFilter = action('nft/CLEAR_FILTER')();
export const filterCategories = action('nft/FILTER_CATEGORIES')();
export const filterStatus = action('nft/FILTER_STATUS')();
export const filterItemsType = action('nft/FILTER_ITEMS_TYPE')();
export const filterCollections = action('nft/FILTER_COLLECTIONS')();
export const filterNftTitle = action('nft/FILTER_NFT_TITLE')();