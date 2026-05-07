import CustomCursor from "@/components/CustomCursor";
import Divider from "@/components/Divider";
import MenuSection from "@/components/MenuSection";
import Navigation from "@/components/Navigation";
import SiteFooter from "@/components/SiteFooter";

export default function MenuPage() {
  return (
    <>
      <CustomCursor />
      <Navigation />
      <main>
        <MenuSection />
        <Divider />
      </main>
      <SiteFooter />
    </>
  );
}

