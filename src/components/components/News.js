import React, { memo, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import * as selectors from "../../store/selectors";
import { fetchNewsBreakdown } from "../../store/actions/thunks";
import Reveal from "react-awesome-reveal";
import { keyframes } from "@emotion/react";
import { useInView } from 'react-intersection-observer';;

const News = () => {
  const dispatch = useDispatch();
  const newsState = useSelector(selectors.newsBreakdownState);
  const news = newsState.data ? newsState.data : [];

   const { ref, inView, entry } = useInView({
    threshold: 0,
  });


  useEffect(() => {
    dispatch(fetchNewsBreakdown());
  }, [dispatch]);

  const fadeInUp = keyframes`
  0% {
    opacity: 0;
    -webkit-transform: translateY(40px);
    transform: translateY(40px);
  }
  100% {
    opacity: 1;
    -webkit-transform: translateY(0);
    transform: translateY(0);
  }
`;
const inline = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
  .d-inline{
    display: inline-block;
   }
`;

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
                  <span className="p-date articlesSubheader">{article.subheader}</span>
                  <Reveal
                    className="onStep"
                    onVisibilityChange={inView}
                    keyframes={fadeInUp}
                    delay={300}
                    duration={900}
                    triggerOnce
                   >
                  <h4 >
                    <span >
                      {article.title}
                    </span>
                  </h4></Reveal>
                   <Reveal
          className="onStep"
          keyframes={fadeInUp}
          delay={600}
          duration={900}
         onVisibilityChange={inView}
         triggerOnce
        >
                  <p>{article.teaser}</p></Reveal>
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
