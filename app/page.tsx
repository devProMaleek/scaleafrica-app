import HeroSection from "./components/HeroSection";
import SwiperSection from "./components/SwiperSection";
import QuoteSection from "./components/QuoteSection";
import QuickSurvey from "./components/QuickSurvey";
import ShareStory from "./components/ShareStory";
import FeaturedStories from "./components/FeaturedStories";
import InterviewFounders from "./components/InterviewFounder";
import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer";

export default function HomePage() {
  return (
    <main className="">
      <HeroSection />
      <SwiperSection />
      <QuoteSection backgroundColor="primary" />
      <FeaturedStories />
      <InterviewFounders />
      <QuickSurvey />
      <ShareStory backgroundColor="white" />
      <QuoteSection backgroundColor="primary" />
      <Newsletter backgroundColor="primary" />
      <Footer backgroundColor="primary" />
    </main>
  );
}
