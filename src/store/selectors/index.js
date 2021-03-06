import { createSelector, createStructuredSelector } from "reselect";


//Store Selectors
export const nftBreakdownState = (state) => state.NFT.nftBreakdown;
export const nftShowcaseState = (state) => state.NFT.nftShowcase;
export const nftDetailState = (state) => state.NFT.nftDetail;
export const hotCollectionsState = (state) => state.hotCollection.hotCollections;
export const authorsState = (state) => state.authors.authorList;
export const authorRankingsState = (state) => state.authors.authorRanking;
export const topProjectsState = (state) => state.topProjects.topProjectsList;
export const topProjectsRankingsState = (state) => state.topProjects.topProjectsRanking;
export const upcomingDropsBreakdownState = (state) => state.upcomingDrops.upcomingDropsBreakdown;
export const upcomingDropsShowcaseState = (state) => state.upcomingDrops.upcomingDropsShowcase;
export const upcomingDropsDetailState = (state) => state.upcomingDrops.upcomingDropsDetail;
export const chartsBreakdownState = (state) => state.charts.chartsBreakdown;
export const chartsShowcaseState = (state) => state.charts.chartsShowcase;
export const chartsDetailState = (state) => state.charts.chartDetail;
export const articlesBreakdownState = (state) => state.articles.articlesBreakdown;
export const articlesShowcaseState = (state) => state.articles.articleshowcase;
export const articlesDetailState = (state) => state.articles.articlesDetail;
export const newsBreakdownState = (state) => state.news.newsBreakdown;
export const newsShowcaseState = (state) => state.news.newshowcase;
export const newsDetailState = (state) => state.news.newsDetail;
export const recentlySoldBreakdownState = (state) => state.recentlySold.recentlySoldBreakdown;
export const recentlySoldShowcaseState = (state) => state.recentlySold.recentlySoldShowcase;
export const recentlySoldDetailState = (state) => state.recentlySold.recentlySoldDetail;
export const allHotCollectionsBreakdownState = (state) => state.allHotCollections.allHotCollectionsBreakdown;
export const allHotCollectionsSAllHowcaseState = (state) => state.allHotCollections.allHotCollectionsShowcase;
export const allHotCollectionsDetailState = (state) => state.allHotCollections.allHotCollectionsDetail;
export const allProjectsState = (state) => state.allProjects.allProjects;
export const allProjectsRankingState = (state) => state.allProjects.allProjectsRanking;
export const allProjectsDetailState = (state) => state.allProjects.allProjectsDetail;
export const projectBreakdownState = (state) => state.NFT.nftBreakdown;
export const collectionBreakdownState = (state) => state.NFT.nftBreakdown;

export const auctionedNfts = createSelector(nftBreakdownState, ( nfts ) => {
    if(!nfts.data) {
        return [];
    }
    const acutioned = nfts.data.filter(nft => !!nft.deadline);
    return acutioned;
});

export const nftFilter = createStructuredSelector({
    categories: (state) => state.filters.selectedCategories,
    status: (state) => state.filters.selectedStatus,
    itemsType: (state) => state.filters.selectedItemsType,
    collections: (state) => state.filters.selectedCollections,
    nftTitle: (state) => state.filters.filterNftTitle
});

export const projectFilter = createStructuredSelector({
    categories: (state) => state.filters.selectedCategories,
    status: (state) => state.filters.selectedStatus,
    itemsType: (state) => state.filters.selectedItemsType,
    collections: (state) => state.filters.selectedCollections,
    nftTitle: (state) => state.filters.filterNftTitle
});

export const nftItems = createSelector(projectFilter, projectBreakdownState, ( filters, nfts ) => {
    let { data } = nfts;
    const { categories, status, itemsType, collections, nftTitle } = filters;
    
    if(!data) {
        return [];
    }

    if(categories.size) {
        data = data.filter( nft => categories.has(nft.category));
    }
    if(status.size) {
        data = data.filter( nft => status.has(nft.status));
    }
    if(itemsType.size) {
        data = data.filter( nft => itemsType.has(nft.item_type));
    }
    if(collections.size) {
        data = data.filter( nft => collections.has(nft.collections));
    }
    if(nftTitle.trim().length) {
        let pattern = new RegExp(`${nftTitle.trim()}`, 'gi');
        console.log(pattern)
        data = data.filter( nft => nft.title.match(pattern));
    }

    return data;
});

export const ProjectItems = createSelector(nftFilter, nftBreakdownState, ( filters, nfts ) => {
    let { data } = nfts;
    const { categories, status, itemsType, collections, nftTitle } = filters;
    
    if(!data) {
        return [];
    }

    if(categories.size) {
        data = data.filter( nft => categories.has(nft.category));
    }
    if(status.size) {
        data = data.filter( nft => status.has(nft.status));
    }
    if(itemsType.size) {
        data = data.filter( nft => itemsType.has(nft.item_type));
    }
    if(collections.size) {
        data = data.filter( nft => collections.has(nft.collections));
    }
    if(nftTitle.trim().length) {
        let pattern = new RegExp(`${nftTitle.trim()}`, 'gi');
        console.log(pattern)
        data = data.filter( nft => nft.title.match(pattern));
    }

    return data;
});

export const CollectionItems = createSelector(nftFilter, nftBreakdownState, ( filters, nfts ) => {
    let { data } = nfts;
    const { categories, status, itemsType, collections, nftTitle } = filters;
    
    if(!data) {
        return [];
    }

    if(categories.size) {
        data = data.filter( nft => categories.has(nft.category));
    }
    if(status.size) {
        data = data.filter( nft => status.has(nft.status));
    }
    if(itemsType.size) {
        data = data.filter( nft => itemsType.has(nft.item_type));
    }
    if(collections.size) {
        data = data.filter( nft => collections.has(nft.collections));
    }
    if(nftTitle.trim().length) {
        let pattern = new RegExp(`${nftTitle.trim()}`, 'gi');
        console.log(pattern)
        data = data.filter( nft => nft.title.match(pattern));
    }

    return data;
});

