import ChartBar from './ChartBar';
import './Chart.css';

const Chart = (props) => {
  const maxDataPoint = props.dataPoints.map((data) => Math.round(data.value));
  const maximumValue = Math.max(...maxDataPoint);

  return (
    <div className="chart">
      {props.dataPoints.map((data) => {
        return (
          <ChartBar
            key={data.level}
            value={data.value}
            maxValue={maximumValue}
            label={data.label}
          />
        );
      })}
    </div>
  );
};

export default Chart;
