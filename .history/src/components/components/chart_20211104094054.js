import React from 'react';
import Chart from 'react-apexcharts';

const Chart = ({
  options,
  series,
  type,
  onChange,
}) => {

  return (
    <div className="wrapper">
     <Chart
     options={options}
     series={series}
     tyle={type}
     height= '200'
     width='150'
     onClick={onClick}
     />
    </div>
  );
};

export default Chart;