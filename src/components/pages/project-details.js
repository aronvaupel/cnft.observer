import React from 'react';
import ColumnProjectsDetailsRedux from '../components/ColumnProjectsDetailsRedux';
import Footer from '../components/footer';
import { createGlobalStyle } from 'styled-components';
import CheckboxProjectsDetails from '../components/CheckboxProjectsDetails';

const GlobalStyles = createGlobalStyle`
  .navbar {
    border-bottom: solid 1px rgba(255, 255, 255, .1) !important;
  }
`;


const ProjectsDetails= () => (
<div>
<GlobalStyles/>
  <section className='container'>
        <div className='row'>
        <div className="spacer-double"></div>
          <div className='col-md-3'>
            <CheckboxProjectsDetails />
          </div>
          <div className="col-md-9">
            <ColumnProjectsDetailsRedux/>
          </div>
        </div>
      </section>


  <Footer />
</div>

);
export default ProjectsDetails;