import Countries from "@/components/Home/Section/countries";
import FreeTools from "@/components/Home/Section/FreeTools";
import HeroSection from "@/components/Home/Section/HeroSection";
import Transactioncard from "@/components/Home/Section/Transaction/transactioncard";
import TransactionStoryCard from "@/components/Home/Section/Transaction/transactioncardStory";
import VirtualCard from "@/components/Home/Section/virtualCard";
import HowWork from "@/components/Home/Section/how_work";
import Services from "@/components/Home/Section/services";
import AppDownload from "@/components/Home/Section/app_download";


export default function Home() {
  return (
    <>
      <HeroSection />
      <HowWork />
      <Services />
      <AppDownload />
      <Countries />
      <FreeTools />
      <div className="px-4 md:-x-0w-full ">
        <VirtualCard />
        <div className="bg-[#F3F4F0] w-full ">
          <div className="max-container">
            <TransactionStoryCard />
          </div>
          <div className="max-container">
            <Transactioncard />
          </div>
        </div>
      </div>
    </>
  );
}
