import ReactApexChart from 'react-apexcharts';
import { buildPieChartConfig } from './helpers';
import './styles.css';

type Props = {
  labels: string[];
  name: string;
  series: number[];
};

function PieChartCard({ labels, name, series }: Props) {
  return (
    <div className="pie-chart-card base-card">
      <ReactApexChart
        options={buildPieChartConfig(labels, name)}
        type="donut"
        width="400px"
        height="400px"
        series={series}
      />
    </div>
  );
}

export default PieChartCard;
