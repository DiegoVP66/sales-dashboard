import './styles.css';
import ReactApexChart from 'react-apexcharts';
import { buildChartSeries, chartOptions, sumSalesByDate } from './helpers';
import { useEffect, useState } from 'react';
import { makeRequest } from '../../utils/request';
import { ChartSeriesData, FilterData, SalesByDate } from '../../types';
import { formatDate, formatPrice } from '../../utils/formatters';

type Props = {
  filterData?: FilterData;
};

function SalesByDateComponent({ filterData }: Props) {
  const [chartSeries, setChartSeries] = useState<ChartSeriesData[]>([]);
  const [totalSum, setTotalSum] = useState(0);

  useEffect(() => {
    makeRequest
      .get<SalesByDate[]>('/sales/by-date?minDate=2017-01-01&maxDate=2017-01-31&gender=FEMALE')
      .then((response) => {
        const newChartSeries = buildChartSeries(response.data);
        setChartSeries(newChartSeries);
        const newTotalSum = sumSalesByDate(response.data);
        setTotalSum(newTotalSum);
      })
      .catch((response) => {
        console.error(response);
      });
  }, []);

  return (
    <div className="sales-by-date-container base-card">
      <div>
        <h4 className="sales-by-date-title">Evolução de vendas</h4>
        {filterData?.dates && (
          <span className="sales-by-date-period">
            {formatDate(filterData?.dates?.[0])} até {formatDate(filterData?.dates?.[1])}
          </span>
        )}
      </div>
      <div className="sales-by-date-data">
        <div className="sales-by-date-quantity-container">
          <h2 className="sales-by-date-quantity">{formatPrice(totalSum)}</h2>
          <span className="sales-by-date-quantity-label">Vendas no período</span>
          <span className="sales-by-date-quantity-description">
            O gráfico mostra as vendas em todas as lojas
          </span>
        </div>
        <div className="sales-by-date-chart">
          <ReactApexChart
            options={chartOptions}
            series={[{ name: 'Vendas', data: chartSeries }]}
            type="bar"
            height={240}
            width="100%"
          />
        </div>
      </div>
    </div>
  );
}

export default SalesByDateComponent;
