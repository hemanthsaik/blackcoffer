"use client";

import { Chart } from "./chart";

export const DataChart = () => {
  const isLoading = false;

  if (isLoading) {
    return <>loading...</>;
  }
  const data = [
    {
      title: "2022-01-01",
      intensity: 3,
      relevance: 14,
      likelihood: 0,
    },
    {
      title: "2022-01-02",
      intensity: 2,
      relevance: 4,
      likelihood: 0,
    },
    {
      title: "2022-01-03",
      intensity: 22,
      relevance: 3,
      likelihood: 4,
    },
    {
      title: "2022-02-01",
      intensity: 3,
      relevance: 9,
      likelihood: 2,
    },
    {
      title: "2022-03-01",
      intensity: 0,
      relevance: 0,
      likelihood: 0,
    },
  ];

  return (
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-6">
      <div className="col-span-1 lg:col-span-3 xl:col-span-4">
        <Chart data={data} />
      </div>
    </div>
  );
};
