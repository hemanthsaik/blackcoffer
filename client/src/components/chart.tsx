import { FileSearch } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Area } from "recharts";
import { AreaVariant } from "./area-variant";

interface props {
  data: {
    title: string;
    intensity: number;
    relevance: number;
    likelihood: number;
  }[];
}

export const Chart = ({ data }: props) => {
  return (
    <Card className="border-none drop-shadow-sm">
      <CardHeader className="flex space-y-2 lg:space-y-0 lg:flex-row lg:items-center justify-between">
        <CardTitle className="text-xl line-clamp-1">
          Records
          {/* TODO: ADD select */}
        </CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col space-y-4">
        {data.length === 0 ? (
          <div className="flex flex-col items-center gap-y-4 justify-center h-[350px] w-full">
            <FileSearch className="text-muted-foreground size-6" />
            <p>
              No data available. Please select a date range to see the data.
            </p>
          </div>
        ) : (
          <AreaVariant data={data} />
        )}
      </CardContent>
    </Card>
  );
};
