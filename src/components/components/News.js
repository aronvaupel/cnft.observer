import React, { memo, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import * as selectors from "../../store/selectors";
import { fetchNewsBreakdown } from "../../store/actions/thunks";

const News = () => {
  const dispatch = useDispatch();
  const newsState = useSelector(selectors.newsBreakdownState);
  const news = newsState.data ? newsState.data : [];

  useEffect(() => {
    dispatch(fetchNewsBreakdown());
  }, [dispatch]);

  return (
    <div className="row">
      <div className="col-lg-4 col-md-6 mb30 articles-row">
        {news &&
          news.map((article, index) => (
            <div className="bloglist item articles-item" key={index}>
              <div className="post-content">
                <div className="post-image">
                  <img alt="" src={article.imgSrc} className="lazy articlePicture" />
                </div>
                <div className="post-text">
                  <span className="p-date">{article.subheader}</span>
                  <h4 >
                    <span >
                      {article.title}
                    </span>
                  </h4>
                  <p>{article.teaser}</p>
                  <div className="read-btn">
                  <span className="link-color">more...</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>{" "}
    </div>
  );
};

export default News;
