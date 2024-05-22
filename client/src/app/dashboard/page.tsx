import { DataChart } from "@/components/data-chart";
import { DataGrid } from "@/components/data-grid";
import { Header } from "@/components/header";

export default function Dashboard() {
  return (
    <>
      <main>
        <Header />
        <div className="max-w-screen-2xl mx-auto -mt-24 pb-20 px-4 lg:px-14">
          <DataGrid />
          <DataChart />
        </div>
      </main>
    </>
  );
}
