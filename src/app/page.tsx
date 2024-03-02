import Image from "next/image";
import Card from "./Layout/components/cards";
import RecentTransactions from "./Layout/components/RecentTransactions";
import WeeklyActivity from "./Layout/components/WeeklyActivity";
import ExpenseStatics from "./Layout/components/FlowChart";
import BalanceHistory from "./Layout/components/BalanceHistory";
import QuickTransfer from "./Layout/components/QuickTransfer";

export default function Home() {
  return (
    <main className="flex flex-col bg-slate-200 h-full">
      <div className="flex justify-between">
        <Card />
        <RecentTransactions />
      </div>
      <div className="flex justify-between">
        <WeeklyActivity />
        <ExpenseStatics />
      </div>
      <div className="flex justify-between">
        <QuickTransfer />
        <BalanceHistory />
      </div>

    </main>
  );
}
