import Navbar from "./scenes/Navbar";
import { useEffect, useState } from "react";
import useMediaQuery from "./hooks/useMediaQuery";
import DotGroup from "./scenes/DotGroup";
import Landing from "./scenes/Landing";
import LineGradient from "./components/LineGradient";
import MySkills from "./scenes/MySkills";

import { library } from '@fortawesome/fontawesome-svg-core';


import {
  faTwitter,
  faFontAwesome,
  faLinkedin,
  faFacebook,
  faJsSquare,
  faHtml5,
  faCss3Alt,
  faPython,
} from "@fortawesome/free-brands-svg-icons";

import { faDatabase, faC, faBoxOpen, faChartPie } from "@fortawesome/free-solid-svg-icons";



library.add(faTwitter, faFontAwesome, faLinkedin, faFacebook, faJsSquare, faHtml5, faCss3Alt, faPython, faDatabase, faC, faBoxOpen, faChartPie);

function App() {

  const [selectedPage, setSelectedPage] = useState('home');
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
  const [isTopOfPage, setIsTopOfPage] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) setIsTopOfPage(true);
      if (window.scrollY !== 0) setIsTopOfPage(false);
    }
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  return (
    <div className="app bg-beige">
      <Navbar
        isTopOfPage={isTopOfPage}
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage} />
      <div className="w-5/6 mx-auto md:h-full">
        {isAboveMediumScreens && (
          <DotGroup
            selectedPage={selectedPage}
            setSelectedPage={setSelectedPage} />
        )}
        <Landing setSelectedPage={setSelectedPage} />
      </div>
      {/* <LineGradient /> */}
      <div className="w-5/6 mx-auto md:h-full">
        <MySkills />
      </div>
    </div>
  );
}

export default App;
