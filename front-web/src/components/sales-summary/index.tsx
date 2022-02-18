import SalesSummaryCard from './sales-summary-card';
import { ReactComponent as AvatarIcon } from '../../assets/images/avatar-icon.svg';
import { ReactComponent as BarChartIcon } from '../../assets/images/bar-chart-icon.svg';
import { ReactComponent as DoneIcon } from '../../assets/images/done-icon.svg';
import { ReactComponent as SyncIcon } from '../../assets/images/sync-icon.svg';
import { FilterData, SalesSummaryData } from '../../types';
import { useEffect, useMemo, useState } from 'react';
import { buildFilterParams, makeRequest } from '../../utils/request';
import './styles.css';

type Props = {
  filterData?: FilterData;
};

const initialSummary = {
  avg: 0,
  count: 0,
  max: 0,
  min: 0
};

function SalesSummary({ filterData }: Props) {
  const params = useMemo(() => buildFilterParams(filterData), [filterData]);
  const [summary, setSummary] = useState<SalesSummaryData>(initialSummary);

  useEffect(() => {
    makeRequest
      .get<SalesSummaryData>('/sales/summary', { params })
      .then((response) => {
        setSummary(response.data);
      })
      .catch((response) => {
        console.error(response);
      });
  }, [params]);
  return (
    <div className="sales-summary-container">
      <SalesSummaryCard value={summary?.avg?.toFixed(2)} label="Média" icon={<DoneIcon />} />
      <SalesSummaryCard value={summary?.count} label="Quantidade" icon={<SyncIcon />} />
      <SalesSummaryCard value={summary?.min} label="Mínima" icon={<BarChartIcon />} />
      <SalesSummaryCard value={summary?.max} label="Máxima" icon={<AvatarIcon />} />
    </div>
  );
}

export default SalesSummary;
