import React from 'react';
import Chart from 'react-apexcharts';

const HomeChart = ({
  options,
  series,
  onClick,
}) => {

  return (
    <div className="wrapper">
     <Chart
     options={options}
     series={series}
     height= '200'
     width='150'
     onClick={onClick}
     />
    </div>
  );
};

export default HomeChart;