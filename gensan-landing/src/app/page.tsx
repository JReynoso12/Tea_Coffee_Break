import CustomCursor from "@/components/CustomCursor";
import Divider from "@/components/Divider";
import EcoSection from "@/components/EcoSection";
import VideoScrolly from "@/components/VideoScrolly";
import Navigation from "@/components/Navigation";
import ReviewsSection from "@/components/ReviewsSection";
import SiteFooter from "@/components/SiteFooter";
import StorySection from "@/components/StorySection";
import VenueSection from "@/components/VenueSection";
import VisitSection from "@/components/VisitSection";
import VibeSection from "@/components/VibeSection";

export default function Home() {
  return (
    <>
      <CustomCursor />
      <Navigation />
      <main>
        <VideoScrolly />
        <Divider />
        <VenueSection />
        <Divider />
        <StorySection />
        <Divider />
        <VibeSection />
        <Divider />
        <ReviewsSection />
        <Divider />
        <EcoSection />
        <VisitSection />
      </main>
      <SiteFooter />
    </>
  );
}
