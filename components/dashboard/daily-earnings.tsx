import { getDailyChartData, getDailyData } from "@/actions/dashboard";
import { DailyEarningsChart } from "./daily-earnings-chart";

export async function DailyEarnings() {
  const dailyData = await getDailyData();
  const dailyChartData = await getDailyChartData();

  return (
    <DailyEarningsChart chartData={dailyChartData} dailyData={dailyData} />
  );
}
