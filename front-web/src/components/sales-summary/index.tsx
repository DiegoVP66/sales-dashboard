import SalesSummaryCard from './sales-summary-card';
import { ReactComponent as AvatarIcon } from '../../assets/images/avatar-icon.svg';
import { ReactComponent as BarChartIcon } from '../../assets/images/bar-chart-icon.svg';
import { ReactComponent as DoneIcon } from '../../assets/images/done-icon.svg';
import { ReactComponent as SyncIcon } from '../../assets/images/sync-icon.svg';
import './styles.css';

function SalesSummary() {
  return (
    <div className="sales-summary-container">
      <SalesSummaryCard value={430} label="Média" icon={<DoneIcon />} />
      <SalesSummaryCard value={630} label="Quantidade" icon={<SyncIcon />} />
      <SalesSummaryCard value={130} label="Mínima" icon={<BarChartIcon />} />
      <SalesSummaryCard value={230} label="Máxima" icon={<AvatarIcon />} />
    </div>
  );
}

export default SalesSummary;
