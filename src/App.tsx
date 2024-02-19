import Navbar from "@/scenes/navbar";
import { useEffect, useState } from "react";
import { SelectedPage } from "@/shared/types";
import Home from "@/scenes/home";
import ContactUs from "./scenes/contactUs";
import Gallery from "./scenes/gallery";
import Timeline from "./scenes/timeline";

function App() {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(
    SelectedPage.Home
  );
  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true);

  useEffect(() => {
    // window.addEventListener("beforeunload", handleBeforeUnload);
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true);
        setSelectedPage(SelectedPage.Home);
      }
      if (window.scrollY !== 0) setIsTopOfPage(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // const handleBeforeUnload = () => {
  //   window.scrollTo(0, 0);
  // };

  return (
    <div className="app text-white">
      <Navbar
        isTopOfPage={isTopOfPage}
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />
      <Home setSelectedPage={setSelectedPage} />
      <Gallery setSelectedPage={setSelectedPage} />
      <Timeline setSelectedPage={setSelectedPage} />
      <ContactUs setSelectedPage={setSelectedPage} />
      {/* <Footer /> */}
    </div>
  );
}

export default App;