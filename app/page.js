import Image from "next/image";
import Header from "./components/header";
import Progress from "./components/progress";
import RecentDonationSegment from "./components/recentDonationSegment";
import SecondSegment from "./components/secondSegment";
import ThirdSegment from "./components/thirdSegment";
import WhoWeAreSegment from "./components/WhoWeAreSegment";
import MonthlySupply from "./components/monthlySupply";
import RecentDonations from "./components/RecentDonations";
import RecentDonationSegment_ from "./components/RecentDonationSegment_";
import Blog from "./components/Blog";

export default function Home() {
  return (
    <main className="  text-gray-800">
      <div className="xl:px-6 lg:px-10 md:px-2 sm:px-4 px-0 xl:pt-10 lg:pt-10 md:pt-9 sm:pt-8 pt-6 2xl:w-[76%] xl:w-[95%] mx-auto">
        <Header></Header>
        {/* <RecentDonations></RecentDonations> */}
        <Progress></Progress>
        <RecentDonationSegment></RecentDonationSegment>
        {/* <RecentDonationSegment_></RecentDonationSegment_> */}
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
