/**
 * @fileoverview Main index file for the Charts Page
 */
import * as React from 'react';
import styles from './chart.module.css';
import PieChart from '@/modules/charts/components/piechart';
type PageProps = {
  chartName: string;
};

const Page = (props: PageProps) => {
  return (
    <div>
      <PieChart title='Pie Chart' data={[['bread', 40], ['reactJS', 40], ['Vue', 20]]} />
    </div>
  )
}

export default Page