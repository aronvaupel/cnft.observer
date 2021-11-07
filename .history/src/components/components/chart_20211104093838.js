import React from 'react';
import Chart from 'react-apexcharts';

export const ChartProps = {
  options: {
      chart:{
          background: string,
          foreground: string
      },
      xaxis: {
          categories:string[]
      },
      plotOption: {
          bar:{
              horizontal:false,
              fill: string[],
              dataLabel: {
                  enabled:false
              },
              title:{
                  text: string,
                  align: string,
                  margin: number,
                  offsetY:number,
                  style:{
                      fontSize: string
                  }
              }
          }
      }
  },
  series: [{
      name:string,
      date:number[]
  }],
  type: string,
  onChange: (value) => void
};

const Chart = ({
  options,
  series,
  type,
  onChange,
}) => {

 const dispatch = useDispatch();
    const projectsState = useSelector(selectors.topProjectsState);
    const projects = projectsState.data ? projectsState.data : [];

    useEffect(() => {
        dispatch(fetchTopProjectsList());
    }, [dispatch]);

  return (
    <div className="wrapper">
     <Chart
     options={options}
     series={series}
     tyle={type}
     height= '200'
     width='150'
     />
    </div>
  );
};

export default Chart;