import React from 'react';
import ColumnCollectionDetailsRedux from '../components/ColumnCollectionDetailsRedux';
import Footer from '../components/footer';
import { createGlobalStyle } from 'styled-components';
import CheckboxCollectionDetails from '../components/CheckboxCollectionDetails';

const GlobalStyles = createGlobalStyle`
  .navbar {
    border-bottom: solid 1px rgba(255, 255, 255, .1) !important;
  }
`;


const CollectionDetails= () => (
<div>
<GlobalStyles/>
  <section className='container'>
        <div className='row'>
        <div className="spacer-double"></div>
          <div className='col-md-3'>
            <CheckboxCollectionDetails />
          </div>
          <div className="col-md-9">
            <ColumnCollectionDetailsRedux/>
          </div>
        </div>
      </section>


  <Footer />
</div>

);
export default CollectionDetails;