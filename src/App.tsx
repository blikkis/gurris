import { useState, useEffect } from "react";
import "./main.less";
import * as React from "react";
import Landing from "./landing/landingpage";

function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 100) {
        setIsScrolled(true);
        console.log("yo");
      }
      if (window.scrollY < 100) {
        setIsScrolled(false);
      }
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className="main">
      {/* <Header isScrolled={isScrolled} />
      <div className="main__content" id="work">
        <WorkPart
          direction=""
          imgSrc={Hytte}
          title={Hytta.title}
          desc={Hytta.desc}
        />
        <WorkPart
          direction="horizontal"
          imgSrc={Benk}
          title={Benken.title}
          desc={Benken.desc}
        />
        <About />
        <Footer />
      </div> */}
      <Landing />
    </div>
  );
}

export default App;
