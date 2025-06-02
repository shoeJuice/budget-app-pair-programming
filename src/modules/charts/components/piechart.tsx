'use client';
import { LegendPosition, Colors } from '@/constants';
import React from 'react'
import { Chart } from 'react-google-charts'
import { ChartType } from '../chartConstants';

type ChartData = [string, number][];
interface ChartProps {
  title?: string;
  data: ChartData;
}

const PieChart = ({ title, data }: ChartProps) => {
  const options = {
    title,
    is3D: false,
    legend: { position: LegendPosition.BOTTOM },
    slices: {
      0: { color: Colors.emerald },
      1: { color: Colors.mint },
      2: { color: Colors.yinMnBlue },
      3: { color: Colors.spaceCadet },
      4: { color: Colors.darkPurple },
    },
  };

  return (
    <div>
      <Chart
        chartType="PieChart"
        data={[['Category', 'Amount'], ...data]}
        options={options}
      />
    </div>
  )
}

export default PieChart