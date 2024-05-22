"use client";

import { useSearchParams } from "next/navigation";
import { DataCard } from "@/components/data-card";
import { AiFillFile } from "react-icons/ai";

export const DataGrid = () => {
  const params = useSearchParams();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pb-2 mb-8">
      <DataCard icon={AiFillFile} title="Total Records" value={100} />
    </div>
  );
};
