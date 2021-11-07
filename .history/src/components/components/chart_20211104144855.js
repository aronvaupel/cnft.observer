import React from 'react';
import Chart from "react-apexcharts"
//react functional component
const HomeChart = () => {
    return (
        <>
            <div className="chartWrapper">
              <Chart
              />
            </div>   
        </>     
    );
};

export default memo(HomeChart);