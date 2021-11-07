import React from 'react';
import Chart from 'react-apexcharts';

const HomeChart = ({
  options,
  series,
  xaxis,
  plotOptions,
  fill,
  dataLabels,
  title,
  onClick,
}) => {

  return (
    <div className="wrapper">
     <Chart
     options={options}
     series={series}
     xaxis={xaxis}
     plotOptions={plotOptions}
     fill={fill}
     dataLabels={dataLabels}
     title={title}
     height= '200'
     width='150'
     onClick={onClick}
     />
    </div>
  );
};

export default HomeChart;