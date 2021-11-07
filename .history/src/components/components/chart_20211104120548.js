import React from 'react';
import Chart from 'react-apexcharts';

const HomeChart = ({
  options,
  series,
  type,
  onClick,
}) => {

  return (
    <div className="wrapper">
     <Chart
     options={options}
     series={series}
     tyle={options.type}
     height= '200'
     width='150'
     onClick={onClick}
     />
    </div>
  );
};

export default HomeChart;