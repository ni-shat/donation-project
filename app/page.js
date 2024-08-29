import Header from "./components/header";
import Progress from "./components/progress";
import RecentDonationSegment from "./components/recentDonationSegment";
import SecondSegment from "./components/secondSegment";
import ThirdSegment from "./components/thirdSegment";
import WhoWeAreSegment from "./components/WhoWeAreSegment";
import MonthlySupply from "./components/monthlySupply";
import StickyButton from "./components/stickyButton";

export default function Home() {
  return (
    <main className="  text-gray-800">
      <StickyButton></StickyButton>
      {/* <div className="xl:px-6 lg:px-10 md:px-2 sm:px-4 px-0 xl:pt-10 lg:pt-10 md:pt-9 sm:pt-8 pt-6 2xl:w-[76%] xl:w-[95%] mx-auto"> */}

      <div className="xl:px-6 lg:px-10 md:px-2 sm:px-4 px-0 xl:pt-5 lg:pt-5 md:pt-4 sm:pt-3 pt-2 2xl:w-[76%] xl:w-[95%] mx-auto">
      <Header></Header>
        <Progress></Progress>
        <RecentDonationSegment></RecentDonationSegment>
        <SecondSegment></SecondSegment>
      </div>
      <ThirdSegment></ThirdSegment>
      <div className="bg-slate-300">
        <WhoWeAreSegment></WhoWeAreSegment>
        <MonthlySupply></MonthlySupply>
      </div>
    </main>
  );
}
