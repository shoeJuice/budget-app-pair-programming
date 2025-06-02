'use client';
import { LegendPosition, Colors } from '@/constants';
import React from 'react'
import { Chart } from 'react-google-charts'
import { ChartType } from '../chartConstants';
import styles from './chart.module.css';

type ChartData = [string, number, number][];
interface ChartProps {
  title?: string;
  data: ChartData;
}

const ColumnChart = ({ title, data }: ChartProps) => {
  const options = {
    title,
    legend: { position: LegendPosition.BOTTOM },
    colors: [Colors.emerald, Colors.yinMnBlue],
    hAxis: {
      title: 'Month',
    },
    vAxis: {
      title: 'Amount ($)',
    },
    bar: { groupWidth: '50%' },
  };

  return (
    <div className={styles.chartWrapper}>
      <Chart
        chartType="ColumnChart"
        data={[['Month', 'Income', 'Expenses'], ...data]}
        options={options}
      />
    </div>
  )
}

export default ColumnChart