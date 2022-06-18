import React, { memo, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import TopProjects from './topProjects';
import * as selectors from '../../store/selectors';
import { fetchTopProjectsList } from "../../store/actions/thunks";
import { useMediaQuery } from "react-responsive";

const TopProjectsList = () => {
    
    const dispatch = useDispatch();
    const projectsState = useSelector(selectors.topProjectsState);
    const projects = projectsState.data ? projectsState.data : [];

    useEffect(() => {
        dispatch(fetchTopProjectsList());
    }, [dispatch]);

const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

    return (
        <div>
            <ol className="author_list">
            { projects && !isMobile ? projects.map((project, index) => (
                <li key={index}>
                    <TopProjects project={project} />
                </li>
            )) : projects.map((project, index) => (
                <li key={index}>
                    <TopProjects project={project} />
                </li>
            )).slice(0,10)}
            </ol>
        </div>
    );
};
export default memo(TopProjectsList);