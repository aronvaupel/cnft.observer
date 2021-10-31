import React, { memo, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import TopProjects from './TopProjects';
import * as selectors from '../../store/selectors';
import { fetchAuthorList } from "../../store/actions/thunks";

const TopProjectsList = () => {
    
    const dispatch = useDispatch();
    const projectsState = useSelector(selectors.projectsState);
    const projects = projectsState.data ? projectsState.data : [];

    useEffect(() => {
        dispatch(fetchAuthorList());
    }, [dispatch]);

    return (
        <div>
            <ol className="author_list">
            { projects && projects.map((author, index) => (
                <li key={index}>
                    <TopProjects user={author} />
                </li>
            ))}
            </ol>
        </div>
    );
};
export default memo(TopProjectsList);