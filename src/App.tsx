import { useState, useEffect } from "react";
import "./main.less";
import * as React from "react";
import Header from "./parts/header";
import WorkPart from "./parts/workpart";
import Hytte from "./assets/hytte.jpg";
import Benk from "./assets/benk.jpg";
import { Hytta, Benken } from "./parts/info";
import About from "./parts/about";
import Contact from "./parts/contact";
import { ContactSchema } from "./parts/contact-schema";
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
      <Header isScrolled={isScrolled} />
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
        <ContactSchema />
        {/* <Contact /> */}
      </div>
    </div>
  );
}

export default App;
