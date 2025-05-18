import ByCategory from '../ui/pie-chart/index'
import ByDate from '../ui/area-chart/index'
import ByView from '../ui/bar-chart/index'
import summaryData from '../../data/summary.json'

const index = () => {
  return (
    <div className="grid grid-cols-12 gap-x-6">
      <ByCategory data={summaryData.summary.byCategory}/>
      <ByDate data={summaryData.summary.byCreatedDate}/>
      <ByView data={summaryData.summary.byView}/>
    </div>
  );
};

export default index;
