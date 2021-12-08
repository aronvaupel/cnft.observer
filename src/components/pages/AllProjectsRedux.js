import React, { memo, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Select from "react-select";
import Footer from "../components/footer";
import * as selectors from "../../store/selectors";
import { fetchAllProjectsRanking } from "../../store/actions/thunks";
import Reveal from "react-awesome-reveal";
import { keyframes } from "@emotion/react";
import { Link } from "@reach/router";

const customStyles = {
  option: (base, state) => ({
    ...base,
    background: "#fff",
    color: "#727272",
    borderRadius: state.isFocused ? "0" : 0,
    "&:hover": {
      background: "#ddd",
    },
  }),
  menu: (base) => ({
    ...base,
    background: "#fff !important",
    borderRadius: 0,
    marginTop: 0,
  }),
  menuList: (base) => ({
    ...base,
    padding: 0,
  }),
  control: (base, state) => ({
    ...base,
    padding: 2,
  }),
};

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

const options = [
  { value: "Last 7 days", label: "Last 7 days" },
  { value: "Last 24 hours", label: "Last 24 hours" },
  { value: "Last 30 days", label: "Last 30 days" },
  { value: "All time", label: "All time" },
];

const AllProjects = () => {
  const dispatch = useDispatch();
  const allProjectsState = useSelector(selectors.allProjectsRankingState);
  const allProjects = allProjectsState.data ? allProjectsState.data : [];

  useEffect(() => {
    dispatch(fetchAllProjectsRanking());
  }, [dispatch]);

  return (
    <div>
      <section
        id="drop-banner"
        className="jumbotron breadcumb center-elements fader"
        style={{
          backgroundImage: `url(${"/img/ownPictures/tree_cropped.jpg"})`,
          backgroundSize: "cover",
        }}
      >
        <div id="headline-adjust">
          <Reveal
            className="onStep"
            keyframes={fadeInUp}
            delay={300}
            duration={900}
            triggerOnce
          >
            <h1 className="col-white outline">All Projects</h1>
          </Reveal>

          <Reveal
            className="onStep"
            keyframes={fadeInUp}
            delay={600}
            duration={900}
            triggerOnce
          >
            <p className="lead col-white outline">Get the total overview!</p>
          </Reveal>
        </div>
      </section>

      <section className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="items_filter centerEl">
              <div className="dropdownSelect one">
                <Select
                  className="select1"
                  styles={customStyles}
                  menuContainerStyle={{ zIndex: 999 }}
                  defaultValue={options[0]}
                  options={options}
                />
              </div>
            </div>
            <table className="table de-table table-rank">
              <thead>
                <tr>
                  <th scope="col">Collection</th>
                  <th scope="col">Volume</th>
                  <th scope="col">24h %</th>
                  <th scope="col">7d %</th>
                  <th scope="col">Floor Price</th>
                  <th scope="col">Owners</th>
                  <th scope="col">Assets</th>
                </tr>
                <tr></tr>
              </thead>
              <tbody>
                {allProjects &&
                  allProjects.map((author, index) => (
                    
                     
                      <tr key={index}>
                        <th scope="row"><Link
                      to={`/project-details/:${author.username}`}
                      style={{
                        textDecoration: "none",
                        color: "#fff"
                      }}
                    >
                          <div className="coll_list_pp">
                            <img className="lazy" src={author.avatar} alt="" />
                            <i className="fa fa-check"></i>
                          </div>
                          {author.username}
                            </Link></th>
                        <td>{author.volume}</td>
                        <td
                          className={author["24h"] < 0 ? "d-min" : "d-plus"}
                        >{`${author["24h"] < 0 ? "" : "+"}${
                          author["24h"]
                        }%`}</td>
                        <td
                          className={author["7d"] < 0 ? "d-min" : "d-plus"}
                        >{`${author["7d"] < 0 ? "" : "+"}${author["7d"]}%`}</td>
                        <td>{author.floor_price}</td>
                        <td>{author.owners}k</td>
                        <td>{author.assets}k</td>
                      </tr>
                
                  ))}
              </tbody>
            </table>
            <div className="spacer-double"></div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default memo(AllProjects);
