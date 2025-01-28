// import AboutSection from "./components/homepage/about";
// import Experience from "./components/homepage/experience";
// import HeroSection from "./components/homepage/hero-section";
// import Projects from "./components/homepage/projects";
// import Skills from "./components/homepage/skills";
//
// export default async function Home() {
//
//
//   return (
//     <div suppressHydrationWarning >
//       <HeroSection />
//       <AboutSection />
//       <Experience />
//       <Skills />
//       <Projects />
//     </div>
//   )
// };




"use client";

import dynamic from "next/dynamic";

// Dynamically importing components
const HeroSection = dynamic(() => import("./components/homepage/hero-section"));
const AboutSection = dynamic(() => import("./components/homepage/about"));
const Experience = dynamic(() => import("./components/homepage/experience"));
const Skills = dynamic(() => import("./components/homepage/skills"));
const Projects = dynamic(() => import("./components/homepage/projects"));

export default function Home() {
    return (
        <div suppressHydrationWarning>
            <HeroSection />
            <AboutSection />
            <Experience />
            <Skills />
            <Projects />
        </div>
    );
}
