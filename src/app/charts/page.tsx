/**
 * @fileoverview Main index file for the Charts Page
 */
import * as React from 'react';
import styles from './chart.module.css';
import PieChart from '@/modules/charts/components/piechart';
import ColumnChart from '@/modules/charts/components/columnchart';

type PageProps = {
  chartName: string;
};

const Page = (props: PageProps) => {
  return (
    <div>
      <PieChart title='Pie Chart' data={[['bread', 40], ['reactJS', 40], ['Vue', 20]]} />
      <ColumnChart title='Column Chart' data={[['January', 100, 120], ['February', 80, 90], ['March', 70, 60]]} />
    </div>
  )
}

export default Page