import ByCategory from '../ui/pie-chart/index'
import ByDate from '../ui/area-chart/index'
import ByView from '../ui/bar-chart/index'
import summaryData from '../../data/summary.json'
const index = () => {
  return (

    <div className="grid grid-cols-12 gap-x-6 chart-container">
  <div className="col-span-12 lg:col-span-3 md:col-span-6">
    <ByCategory data={summaryData.summary.byCategory} />
  </div>
  <div className="col-span-12 lg:col-span-3 md:col-span-6">
    <ByDate data={summaryData.summary.byCreatedDate} />
  </div>
  <div className="col-span-12 lg:col-span-6 md:col-span-6">
    <ByView data={summaryData.summary.byView} />
  </div>
</div>
  );
};

export default index;
