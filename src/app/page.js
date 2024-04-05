import IntroSection from "@/Components/Home/IntroSection";
import Navbar from "@/Components/Navbar";


export default function Home() {
  return (
    <div className="bg-darkBlack h-[100vh] px-[8vw] font-poppins text-whiteText">
      <Navbar/>
      {/* home */}
      <div>
        <IntroSection/>
      </div>
      
    </div>
  );
}
