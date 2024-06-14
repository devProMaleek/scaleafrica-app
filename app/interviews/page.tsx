import React from "react";
import HeroSection from "./components/HeroSection";
import Newsletter from "../components/Newsletter";
import MoreInterviews from "./components/MoreInterviews";
import Footer from "../components/Footer";
type Props = {};

const Interviews = (props: Props) => {
  return (
    <main>
      <HeroSection />
      <MoreInterviews />
      <Newsletter backgroundColor="white" />
      <Footer backgroundColor="white" />
    </main>
  );
};

export default Interviews;
