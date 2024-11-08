// Copyright 2024 Administrator
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Work from "./components/Work";
import Review from "./components/Review";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

import { gsap } from "gsap";
import { ReactLenis } from "lenis/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { element } from "prop-types";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const App = () => {
  useGSAP(() => {
    const elements = gsap.utils.toArray(".reveal-up");

    elements.forEach((element) => {
      gsap.to(element, {
        scrollTrigger: {
          trigger: element,
          start: "-200 bottom",
          end: "bottom 80%",
          scrub: true,
        },
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power2.out",
      });
    });
  });

  return (
    <ReactLenis root>
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Work />
        {/* <Review /> */}
        <Contact />
      </main>
      <Footer />
    </ReactLenis>
  );
};

export default App;
