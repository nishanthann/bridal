import AboutPage from "./Components/about";
import Cta from "./Components/Cta";

import BridalHomePage from "./Components/home";
import MasonryGallery from "./Components/ImageGallery";
import MakeupPricing from "./Components/pricing";

export default function Home() {
  return (
    <>
      <BridalHomePage />

      <AboutPage />
      <MasonryGallery />
      <MakeupPricing />
      <Cta />
    </>
    // <div className="flex min-h-screen items-center justify-center font-sans"></div>
  );
}
