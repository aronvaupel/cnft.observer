import React, { memo, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import TopProjects from './topProjects';
import * as selectors from '../../store/selectors';
import { fetchTopProjectsList } from "../../store/actions/thunks";

const TopProjectsList = () => {
    
    const dispatch = useDispatch();
    const projectsState = useSelector(selectors.topProjectsState);
    const projects = projectsState.data ? projectsState.data : [];

    useEffect(() => {
        dispatch(fetchTopProjectsList());
    }, [dispatch]);

    return (
        <div>
            <ol className="author_list">
            { projects && projects.map((project, index) => (
                <li key={index}>
                    <TopProjects project={project} />
                </li>
            ))}
            </ol>
        </div>
    );
};
export default memo(TopProjectsList);