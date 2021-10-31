import React, { memo } from 'react';

//react functional component
const TopProject = ({ project }) => {
    return (
        <>
            <div className="author_list_pp">
              <span onClick={()=> window.open("", "_self")}>
                  <img className="lazy" src={project.avatar} alt=""/>
                  <i className="fa fa-check"></i>
              </span>
            </div>                                    
            <div className="author_list_info">
                <span onClick={()=> window.open("", "_self")}>{project.projectname}</span>
                <span className="bot">{project.sales} Sales | {project.volume} ADA</span>
            </div>   
        </>     
    );
};

export default memo(TopProject);